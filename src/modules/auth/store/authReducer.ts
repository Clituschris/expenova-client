import { createSlice } from '@reduxjs/toolkit';
import {
  getResetPasswordkeyMiddleware,
  loginMiddleware,
  resetPasswordMiddleware,
  signupMiddleware,
  signupVerifyMiddleware
} from './authMiddleware';
import type { AuthState } from './auth.types';

const initialState: AuthState = {
  isLoading: false,
  isValid: false,
  passwordResetKey: undefined
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    resetIsValid(state) {
      state.isValid = false;
    },
    resetPasswordResetKey(state) {
      state.passwordResetKey = undefined;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginMiddleware.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginMiddleware.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(loginMiddleware.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(signupVerifyMiddleware.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signupVerifyMiddleware.fulfilled, (state) => {
      state.isLoading = false;
      state.isValid = true;
    });
    builder.addCase(signupVerifyMiddleware.rejected, (state) => {
      state.isLoading = false;
      state.isValid = false;
    });

    builder.addCase(signupMiddleware.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signupMiddleware.fulfilled, (state) => {
      state.isLoading = false;
      state.isValid = false;
    });
    builder.addCase(signupMiddleware.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getResetPasswordkeyMiddleware.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getResetPasswordkeyMiddleware.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isValid = true;
        state.passwordResetKey = action.payload.reset_key;
      }
    );
    builder.addCase(getResetPasswordkeyMiddleware.rejected, (state) => {
      state.isLoading = false;
      state.isValid = false;
    });

    builder.addCase(resetPasswordMiddleware.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(resetPasswordMiddleware.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(resetPasswordMiddleware.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export const { resetIsValid, resetPasswordResetKey } = authSlice.actions;
export default authSlice.reducer;
