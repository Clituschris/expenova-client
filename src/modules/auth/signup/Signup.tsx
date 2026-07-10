/*** libraries ***/
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

/*** css ***/
import styles from './Signup.module.css';

/*** types ***/
import SetPassword from './components/setPassword/SetPassword';

/*** components ***/
import PersonalDetails from './components/personalDetails/PersonalDetails';
import { Button } from '@app/components';

const SignUp = () => {
  const { t } = useTranslation();

  const [isValid, setIsvalid] = useState(false);

  const buttonText = useMemo(
    () => (isValid ? t('auth.button.createaccount') : t('auth.button.next')),
    [isValid]
  );

  return (
    <>
      <PersonalDetails />
      {isValid ? (
        <>
          <div className={styles.splitter}></div>
          <SetPassword />
        </>
      ) : null}
      <div className={styles.button}>
        <Button text={buttonText} onClick={() => setIsvalid(true)} />
      </div>
    </>
  );
};

export default SignUp;
