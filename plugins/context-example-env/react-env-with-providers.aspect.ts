import { Aspect } from '@teambit/harmony';

export const componentId = 'learn-bit-react.context/extensions.react-env-with-provider';

export type WithPreviewReactConfig = {
  baseMoviesUrl: string;
  apiKey: string;
};

export const WithPreviewReactAspect = Aspect.create({
  id: componentId,
  defaultConfig: { 
    baseMoviesUrl: undefined,
    apiKey: undefined
  },
});
