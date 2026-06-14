import type { FC } from 'react';
import type { Props } from './Signup.type';
import styles from './Signup.module.css';

import { useNavigate } from 'react-router-dom';

import { Logo, LoginIllustrator } from '@app/icons';
import { Input, Button } from '@app/components';
import { useTranslation } from 'react-i18next';
import i18n from '@app/i18n';

const Signup: FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToLogin = () => {
    navigate('/login');
  };

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'en' ? 'ta' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo size={3} />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.illustratorContainer}>
          <LoginIllustrator />
        </div>
        <div className={styles.inputContainer}>
          <Input
            type="text"
            icon="user"
            placeholder={t('auth.name')}
            onChange={() => {}}
          />
          <Input
            type="email"
            placeholder={t('auth.email')}
            onChange={() => {}}
          />
          <Input
            type="password"
            placeholder={t('auth.password')}
            onChange={() => {}}
          />
          <Input
            type="password"
            placeholder={t('auth.confirmpassword')}
            onChange={() => {}}
          />
          <Button text={t('auth.signup')} onClick={toggleLanguage} />
          <div className={styles.loginContainer}>
            <div>{t('auth.haveaccount')}</div>
            <div className={styles.loginLink} onClick={goToLogin}>
              {t('auth.signin')}
            </div>
          </div>
        </div>
        <div className={styles.illustratorContainer}>
          <LoginIllustrator invert />
        </div>
      </div>
    </div>
  );
};

export default Signup;
