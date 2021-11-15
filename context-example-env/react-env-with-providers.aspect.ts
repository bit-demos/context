import { Aspect } from '@teambit/harmony';

export const componentId = 'teambit.context/extensions.react-env-with-provider';

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
