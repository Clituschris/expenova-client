/** library **/
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

/** constants **/
import ROUTES from '@app/routes';
import { TOKEN, PUBLIC_ROUTES } from '@app/utility/constants';

/** utils **/
import { errorCodeToMessage, loadSlashScreen } from '@app/utility/helpers';

/** types **/
import type {
  LoginPayload,
  ResetPasswordFormValues,
  SignupPayload
} from '@app/modules/auth/store/auth.types';

/** hooks **/
import { useToast } from '@app/components';
import { useAppDispatch, type RootState } from '@app/redux/store';
import {
  getResetPasswordkeyMiddleware,
  healthCheckMiddleware,
  loginMiddleware,
  resetPasswordMiddleware,
  signupMiddleware,
  signupVerifyMiddleware,
  verifyTokenMiddleware
} from '@app/modules/auth/store/authMiddleware';

/** reducers **/
import {
  resetIsValid,
  resetPasswordResetKey
} from '@app/modules/auth/store/authReducer';

export default function useAuth() {
  const toast = useToast();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isAuth = useSelector((state: RootState) => state.authReducer.isAuth);
  const loading = useSelector(
    (state: RootState) => state.authReducer.isLoading
  );
  const isValid = useSelector((state: RootState) => state.authReducer.isValid);
  const resetKey = useSelector(
    (state: RootState) => state.authReducer.passwordResetKey
  );

  const initializer = async () => {
    try {
      await Promise.all([
        dispatch(healthCheckMiddleware()).unwrap(),
        loadSlashScreen()
      ]);

      if (PUBLIC_ROUTES.includes(location.pathname)) {
        return true;
      }

      const token = Cookies.get(TOKEN);
      if (token) {
        await dispatch(verifyTokenMiddleware()).unwrap();
      }
      return true;
    } catch {
      return false;
    }
  };

  const loginHandler = async (data: LoginPayload) => {
    try {
      await dispatch(loginMiddleware(data)).unwrap();
      navigate(ROUTES.DASHBOARD, { replace: true });
    } catch (error) {
      const errorKey = errorCodeToMessage(error);
      toast.error(t(errorKey));
    }
  };

  const signupHandler = async (data: SignupPayload) => {
    try {
      if (isValid) {
        await dispatch(signupMiddleware(data)).unwrap();
        navigate(ROUTES.DASHBOARD, { replace: true });
      } else {
        await dispatch(signupVerifyMiddleware({ email: data.email })).unwrap();
      }
    } catch (error) {
      const errorKey = errorCodeToMessage(error);
      toast.error(t(errorKey));
    }
  };

  const resetPasswordHandler = async (data: ResetPasswordFormValues) => {
    try {
      const { email, phone, password } = data;
      if (isValid) {
        const payload = { email, password };
        await dispatch(
          resetPasswordMiddleware({
            payload,
            headers: { reset_key: resetKey as string }
          })
        ).unwrap();
        toast.success(t('toast.success.passwordreset'));
        navigate(ROUTES.LOGIN);
      } else {
        const payload = { email, phone };
        await dispatch(getResetPasswordkeyMiddleware(payload)).unwrap();
      }
    } catch (error) {
      const errorKey = errorCodeToMessage(error);
      toast.error(t(errorKey));
    }
  };

  const resetSignUpState = () => {
    dispatch(resetIsValid());
  };

  const resetPasswordChangeState = () => {
    dispatch(resetIsValid());
    dispatch(resetPasswordResetKey());
  };

  return {
    isAuth,
    loading,
    isValid,
    initializer,
    loginHandler,
    signupHandler,
    resetPasswordHandler,
    resetSignUpState,
    resetPasswordChangeState
  };
}
