import React, {ReactNode} from 'react';
import axios from 'axios';
import { MovieResponse } from '@learn-bit-react/movies.models.movie';
import { ApiContextBaseProvider, useApiContext, ContextResource } from '@learn-bit-react/context.api-context-base';

const defaultBaseUrl = 'https://www.omdbapi.com';
const defaultApiKey = '35fdde3e';

export type MovieApiContextProps = {
    baseUrl?: string;
    apiKey?: string;
    children?: ReactNode;
}

export function MovieApiContextProvider({ baseUrl, apiKey, children}: MovieApiContextProps){
    const axiosInstance = axios.create({
        baseURL: baseUrl || defaultBaseUrl,
        params: {
        apikey: apiKey || defaultApiKey
        }
    });
    return <ApiContextBaseProvider apiInstance={axiosInstance}>{children}</ApiContextBaseProvider>
}

export const UseMovieContext = useApiContext;

export type MoviesContextResource = ContextResource<MovieResponse>;


