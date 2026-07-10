/*** libraries ***/
import type { FC } from 'react';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';

/*** css ***/
import styles from './AuthLayout.module.css';

/*** types ***/
import type { Props } from './AuthLayout.type';
import type { ChoiceValue } from '@app/components/choiceButton/ChoiceButton.type';

/*** components ***/
import { ChoiceButton } from '@app/components';

/*** modules ***/
import { ForgotPassword, Login, Signup } from '@app/modules/auth';

/*** hooks ***/
import { useAuthLayout } from '@app/hooks';
import { Logo } from '@app/icons';

const AuthLayout: FC<Props> = (props) => {
  const { layoutType } = props;
  const navigate = useNavigate();

  const choices = [
    { label: t('auth.login'), value: 'login' },
    { label: t('auth.signup'), value: 'signup' }
  ];
  const {
    bannerTitle,
    bannerSummary,
    formTitle,
    formSubtitle,
    isChoiceVisible
  } = useAuthLayout(props);

  const handleNavigate = (value: ChoiceValue) => {
    navigate(`/${value}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.animateContainer}></div>
        <div className={styles.bannerTitle}>{bannerTitle}</div>
        <div className={styles.bannerSummary}>{bannerSummary}</div>
        <div className={styles.bannerCopyright}>
          {t('auth.banner.copyright')}
        </div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.formContainer}>
          <div className={styles.logo}>
            <Logo size={2} />
          </div>
          <div className={styles.formTitle}>{formTitle}</div>
          <div className={styles.formSubTitle}>{formSubtitle}</div>
          {isChoiceVisible ? (
            <div className={styles.choices}>
              <ChoiceButton
                choices={choices}
                value={layoutType}
                onSelect={handleNavigate}
              />
            </div>
          ) : null}
          {layoutType === 'login' ? (
            <Login />
          ) : layoutType === 'signup' ? (
            <Signup />
          ) : layoutType === 'forgotpassword' ? (
            <ForgotPassword />
          ) : null}
          <div className={styles.mobileCopyright}>
            {t('auth.banner.copyright')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
