import type { paths, components } from './schema';

export interface ThunkApiConfig {
  rejectValue: string;
}

export type ApiPath = keyof paths;
export type ApiMethod<P extends ApiPath> = keyof paths[P];

// Header for a given path + method
export type HeaderOf<
  P extends ApiPath,
  M extends ApiMethod<P>
> = paths[P][M] extends { parameters: { header?: infer Q } } ? Q : never;

// Query params for a given path + method
export type QueryOf<
  P extends ApiPath,
  M extends ApiMethod<P>
> = paths[P][M] extends { parameters: { query?: infer Q } } ? Q : never;

// Request body for a given path + method
export type BodyOf<
  P extends ApiPath,
  M extends ApiMethod<P>
> = paths[P][M] extends {
  requestBody: { content: { 'application/json': infer B } };
}
  ? B
  : never;

// Response body for a given path + method (defaults to 200)
export type SuccessResponseOf<
  P extends ApiPath,
  M extends ApiMethod<P>
> = paths[P][M] extends {
  responses: infer R;
}
  ? {
      [K in keyof R]: R[K] extends {
        content: {
          'application/json': infer Res;
        };
      }
        ? Res
        : never;
    }[Exclude<keyof R, 'default'>]
  : never;

export type ErrorResponse = components['schemas']['def-0'];
