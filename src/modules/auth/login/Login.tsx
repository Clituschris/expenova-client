/** libraries **/
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

/** css **/
import styles from './Login.module.css';

/** types **/
import type { LoginPayload } from '../store/auth.types';

/** components **/
import { Button, Input } from '@app/components';

/** layout **/
import { AuthLayout } from '@app/layout';

/** hooks **/
import useAuth from '@app/hooks/useAuth';

const Login = () => {
  const { t } = useTranslation();
  const { loading, loginHandler } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginPayload>({
    defaultValues: { email: '', password: '' }
  });

  return (
    <AuthLayout
      layoutType="login"
      bannerTitle={t('auth.banner.title.login')}
      bannerSummary={t('auth.banner.summary.login')}
      formTitle={t('auth.title.login')}
      formSubtitle={t('auth.subtitle.login')}
      isChoiceVisible
    >
      <form className={styles.container} onSubmit={handleSubmit(loginHandler)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: t('auth.validation.emailRequired'),
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: t('auth.validation.emailInvalid')
            }
          }}
          render={({ field }) => (
            <Input
              placeholder="you@example.com"
              label={t('auth.form.email')}
              id="email"
              name={field.name}
              type="email"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: t('auth.validation.passwordRequired'),
            minLength: {
              value: 8,
              message: t('auth.validation.passwordMinLength')
            }
          }}
          render={({ field }) => (
            <Input
              placeholder="*************"
              label={t('auth.form.password')}
              id="password"
              name={field.name}
              type="password"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.password?.message}
              headerLink={
                <Link
                  to="/forgotpassword"
                  className={styles.forgotPasswordLink}
                  tabIndex={-1}
                >
                  {t('auth.form.forgotpassword')}
                </Link>
              }
            />
          )}
        />
        <div className={styles.button}>
          <Button
            text={t('auth.button.login')}
            type="submit"
            loading={loading}
          />
        </div>
        <div className={styles.createAccount}>
          {t('auth.form.signuplink.text')}
          <Link to="/signup" className={styles.signupLink} tabIndex={-1}>
            {t('auth.form.signuplink.link')}
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
