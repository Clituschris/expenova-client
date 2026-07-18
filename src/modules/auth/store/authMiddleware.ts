import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import Cookies from 'js-cookie';
import APIROUTES from '@app/api/apiRoutes';
import {
  getRequest,
  postRequest,
  patchRequest
} from '@app/utility/commonServices';
import type { ErrorResponse } from '@app/api/apiTypes';
import {
  USER_LOGIN,
  USER_SIGNUP_VERIFY,
  USER_SIGNUP,
  USER_RESET_PASSWORD_KEY,
  USER_RESET_PASSWORD,
  VERIFY_TOKEN,
  HEALTH_CHECK
} from '@app/redux/actions';
import type {
  HealthResponse,
  LoginPayload,
  LoginResponse,
  ResetPasswordHeader,
  ResetPasswordKeyPayload,
  ResetPasswordKeyResponse,
  ResetPasswordPayload,
  ResetPasswordResponse,
  SignupPayload,
  SignupResponse,
  SignupVerifyQueryParam,
  SignupVerifyResponse
} from './auth.types';
import { TOKEN } from '@app/utility/constants';

export const healthCheckMiddleware = createAsyncThunk<HealthResponse>(
  HEALTH_CHECK,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(`${APIROUTES.HEALTH}`);
      return data;
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error)) {
        const statusCode = error?.response?.data.statusCode ?? 500;
        return rejectWithValue(statusCode);
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);

export const verifyTokenMiddleware = createAsyncThunk<LoginResponse>(
  VERIFY_TOKEN,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(`${APIROUTES.VERIFY_TOKEN}`);
      return data;
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error)) {
        const statusCode = error?.response?.data.statusCode ?? 500;
        return rejectWithValue(statusCode);
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);

export const loginMiddleware = createAsyncThunk<LoginResponse, LoginPayload>(
  USER_LOGIN,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await postRequest(`${APIROUTES.LOGIN}`, payload);
      Cookies.set(TOKEN, data.token, { expires: 1 });
      return data;
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error)) {
        const statusCode = error?.response?.data.statusCode ?? 500;
        return rejectWithValue(statusCode);
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);

export const signupVerifyMiddleware = createAsyncThunk<
  SignupVerifyResponse,
  SignupVerifyQueryParam
>(USER_SIGNUP_VERIFY, async (params, { rejectWithValue }) => {
  try {
    const { data } = await getRequest(`${APIROUTES.SIGNUP_VERIFY}`, { params });
    return data;
  } catch (error) {
    if (isAxiosError<ErrorResponse>(error)) {
      const statusCode = error?.response?.data.statusCode ?? 500;
      return rejectWithValue(statusCode);
    }
    const typedError = error as Error;
    return rejectWithValue(typedError);
  }
});

export const signupMiddleware = createAsyncThunk<SignupResponse, SignupPayload>(
  USER_SIGNUP,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await postRequest(`${APIROUTES.SIGNUP}`, payload);
      Cookies.set(TOKEN, data.token, { expires: 1 });
      return data;
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error)) {
        const statusCode = error?.response?.data.statusCode ?? 500;
        return rejectWithValue(statusCode);
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);

export const getResetPasswordkeyMiddleware = createAsyncThunk<
  ResetPasswordKeyResponse,
  ResetPasswordKeyPayload
>(USER_RESET_PASSWORD_KEY, async (payload, { rejectWithValue }) => {
  try {
    const { data } = await postRequest(
      `${APIROUTES.RESET_PASSWORD_KEY}`,
      payload
    );
    return data;
  } catch (error) {
    if (isAxiosError<ErrorResponse>(error)) {
      const statusCode = error?.response?.data.statusCode ?? 500;
      return rejectWithValue(statusCode);
    }
    const typedError = error as Error;
    return rejectWithValue(typedError);
  }
});

type ResetPasswordParam = {
  payload: ResetPasswordPayload;
  headers: ResetPasswordHeader;
};
export const resetPasswordMiddleware = createAsyncThunk<
  ResetPasswordResponse,
  ResetPasswordParam
>(USER_RESET_PASSWORD, async ({ payload, headers }, { rejectWithValue }) => {
  try {
    const { data } = await patchRequest(
      `${APIROUTES.RESET_PASSWORD}`,
      payload,
      { headers }
    );
    return data;
  } catch (error) {
    if (isAxiosError<ErrorResponse>(error)) {
      const statusCode = error?.response?.data.statusCode ?? 500;
      return rejectWithValue(statusCode);
    }
    const typedError = error as Error;
    return rejectWithValue(typedError);
  }
});
