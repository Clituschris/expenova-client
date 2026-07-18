/** library **/
import { useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';

/** css **/
import styles from './ForgotPassword.module.css';

/** components **/
import { Button, Input } from '@app/components';

/** layout **/
import { AuthLayout } from '@app/layout';

/** hooks **/
import useAuth from '@app/hooks/useAuth';

/** constants **/
import ROUTES from '@app/routes';

/* types */
import type { ResetPasswordFormValues } from '../store/auth.types';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { isValid, loading, resetPasswordHandler, resetPasswordChangeState } =
    useAuth();

  const buttonText = useMemo(
    () => (isValid ? t('auth.button.resetpassword') : t('auth.button.next')),
    [isValid]
  );

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues
  } = useForm<ResetPasswordFormValues>({
    defaultValues: {
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  });

  const handleCancel = () => {
    resetPasswordChangeState();
    navigate(ROUTES.LOGIN);
  };

  useEffect(() => {
    return () => {
      resetPasswordChangeState();
    };
  }, []);

  return (
    <AuthLayout
      layoutType="forgotpassword"
      bannerTitle={t('auth.banner.title.forgotpassword')}
      bannerSummary={t('auth.banner.summary.forgotpassword')}
      formTitle={t('auth.title.forgotpassword')}
      formSubtitle={t('auth.subtitle.forgotpassword')}
    >
      <form
        className={styles.container}
        onSubmit={handleSubmit(resetPasswordHandler)}
      >
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
              disabled={isValid}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{
            required: t('auth.validation.phoneRequired'),
            minLength: {
              value: 10,
              message: t('auth.validation.phoneMinLength')
            },
            maxLength: {
              value: 15,
              message: t('auth.validation.phoneMaxLength')
            }
          }}
          render={({ field }) => (
            <Input
              placeholder="+91 1234512345"
              label={t('auth.form.phone')}
              id="phone"
              name={field.name}
              type="number"
              icon="phone"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.phone?.message}
              disabled={isValid}
            />
          )}
        />
        {isValid ? (
          <>
            <div className={styles.splitter}></div>
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
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: t('auth.validation.confirmPasswordRequired'),
                validate: (value) =>
                  value === getValues('password') ||
                  t('auth.validation.passwordsMustMatch')
              }}
              render={({ field }) => (
                <Input
                  placeholder="*************"
                  label={t('auth.form.confirmpassword')}
                  id="confirmpassword"
                  name={field.name}
                  type="password"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  error={errors.confirmPassword?.message}
                />
              )}
            />
          </>
        ) : null}
        <div className={styles.button}>
          <Button
            text={t('auth.button.cancel')}
            type="reset"
            onClick={handleCancel}
            outlined
          />
          <Button text={buttonText} type="submit" loading={loading} />
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
