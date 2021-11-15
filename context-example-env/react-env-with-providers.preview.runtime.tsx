import React from 'react';
import axios from 'axios';
import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { Aspect } from '@teambit/harmony';
import { ThemeContext } from '@learn-bit-react/movies.theme.theme-context';
import { MovieApiContextProvider } from '@teambit/context.context.movies-api-context';
import { WithPreviewReactConfig, WithPreviewReactAspect } from './react-env-with-providers.aspect';

export class WithPreviewReactPreview {
  constructor(private config: WithPreviewReactConfig) {} // this config makes the providers configurable via the workspace.json entry

  /**
   * this is how other aspects can now access the runtime's configured values.
   */
  getConfigs() {
    return this.config;
  }

  static runtime: any = PreviewRuntime;

  static dependencies: Aspect[] = [ReactAspect];

  static async provider([react]: [ReactPreview], config: WithPreviewReactConfig) {
    const withPreviewReactPreview = new WithPreviewReactPreview(config);

    // register a new provider to wrap all compositions in the symphony-react environment.
    react.registerProvider([
      ({ children }) => {
        return <MovieApiContextProvider baseUrl={config.baseMoviesUrl} apiKey={config.apiKey}>{children}</ MovieApiContextProvider>
      },
      ThemeContext as any
    ]);

    return withPreviewReactPreview;
  }
}

WithPreviewReactAspect.addRuntime(WithPreviewReactPreview);
