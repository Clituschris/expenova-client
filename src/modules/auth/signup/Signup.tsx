/** libraries **/
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';

/** css **/
import styles from './Signup.module.css';

/** components **/
import { Button, Input } from '@app/components';

/** layout **/
import { AuthLayout } from '@app/layout';

/** hooks **/
import useAuth from '@app/hooks/useAuth';

/** types **/
import type { SignupFormValues } from '../store/auth.types';

const SignUp = () => {
  const { t } = useTranslation();
  const { loading, isValid, signupHandler, resetSignUpState } = useAuth();

  const buttonText = useMemo(
    () => (isValid ? t('auth.button.createaccount') : t('auth.button.next')),
    [isValid]
  );

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues
  } = useForm<SignupFormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  });

  useEffect(() => {
    return () => {
      resetSignUpState();
    };
  }, []);

  return (
    <AuthLayout
      layoutType="signup"
      bannerTitle={t('auth.banner.title.signup')}
      bannerSummary={t('auth.banner.summary.signup')}
      formTitle={t('auth.title.signup')}
      formSubtitle={t('auth.subtitle.signup')}
      isChoiceVisible
    >
      <form className={styles.container} onSubmit={handleSubmit(signupHandler)}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: t('auth.validation.nameRequired'),
            minLength: {
              value: 3,
              message: t('auth.validation.nameInvalid')
            }
          }}
          render={({ field }) => (
            <Input
              placeholder="Tony Stark"
              label={t('auth.form.name')}
              id="name"
              name={field.name}
              icon="user"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.name?.message}
              disabled={isValid}
            />
          )}
        />
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
          <Button text={buttonText} type="submit" loading={loading} />
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
