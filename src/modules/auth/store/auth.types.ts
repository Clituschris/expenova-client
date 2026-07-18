import type {
  BodyOf,
  SuccessResponseOf,
  QueryOf,
  HeaderOf
} from '@app/api/apiTypes';
import apiRoutes from '@app/api/apiRoutes';

export type AuthState = {
  isLoading: boolean;
  isValid: boolean;
  passwordResetKey?: string;
};

export type SignupFormValues = { confirmPassword: string } & SignupPayload;
export type ResetPasswordFormValues = {
  confirmPassword: string;
} & ResetPasswordKeyPayload &
  ResetPasswordPayload;

export type HealthResponse = SuccessResponseOf<typeof apiRoutes.HEALTH, 'get'>;

export type LoginPayload = BodyOf<typeof apiRoutes.LOGIN, 'post'>;
export type LoginResponse = SuccessResponseOf<typeof apiRoutes.LOGIN, 'post'>;

export type SignupVerifyQueryParam = QueryOf<
  typeof apiRoutes.SIGNUP_VERIFY,
  'get'
>;
export type SignupVerifyResponse = SuccessResponseOf<
  typeof apiRoutes.SIGNUP_VERIFY,
  'get'
>;

export type SignupPayload = BodyOf<typeof apiRoutes.SIGNUP, 'post'>;
export type SignupResponse = SuccessResponseOf<typeof apiRoutes.SIGNUP, 'post'>;

export type ResetPasswordKeyPayload = BodyOf<
  typeof apiRoutes.RESET_PASSWORD_KEY,
  'post'
>;
export type ResetPasswordKeyResponse = SuccessResponseOf<
  typeof apiRoutes.RESET_PASSWORD_KEY,
  'post'
>;

export type ResetPasswordHeader = HeaderOf<
  typeof apiRoutes.RESET_PASSWORD,
  'patch'
>;

export type ResetPasswordPayload = BodyOf<
  typeof apiRoutes.RESET_PASSWORD,
  'patch'
>;
export type ResetPasswordResponse = SuccessResponseOf<
  typeof apiRoutes.RESET_PASSWORD,
  'patch'
>;
