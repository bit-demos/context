import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { WithPreviewReactAspect } from './react-env-with-providers.aspect';

export class WithPreviewReactMain {
  constructor(private react: ReactMain) {}


  // TODO change to new envs API implementation
  /** @deprecated use useTypescript 
   * override the tsconfig.
   */
  overrideTsConfig(tsconfig: any) {
    this.react.overrideTsConfig(tsconfig);
  }

  /**
   * override the env's typescript config for both dev and build time.
   * Replaces both overrideTsConfig (devConfig) and overrideBuildTsConfig (buildConfig)
   */
  useTypescript = this.react.useTypescript.bind(this.react);

  static runtime = MainRuntime;

  static dependencies = [ReactAspect, EnvsAspect];

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const WithProvidersEnv = envs.compose(react.reactEnv, [
        react.overrideDependencies({
          dependencies: {
            '@teambit/context.context.movies-api-context': '-'
          },
          devDependencies: {
            '@teambit/context.context.movies-api-context': '-'
          },
          peerDependencies: {
            '@teambit/context.context.movies-api-context': {
              version: 'latest',
              resolveFromEnv: true,
            }
          },
        })
    ]);
    envs.registerEnv(WithProvidersEnv);
    return new WithPreviewReactMain(react);
  }
}

WithPreviewReactAspect.addRuntime(WithPreviewReactMain);
