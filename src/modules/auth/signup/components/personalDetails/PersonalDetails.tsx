/*** libraries ***/
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

/*** css ***/
import styles from './PersonalDetails.module.css';

/*** types ***/
import type { Props } from './PersonalDetails.type';

/*** components ***/
import { Input } from '@app/components';

const PersonalDetails: FC<Props> = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Input
        placeholder="Tony Stark"
        onChange={() => {}}
        label={t('auth.form.name')}
        id="name"
        icon="user"
      />
      <Input
        placeholder="you@example.com"
        onChange={() => {}}
        label={t('auth.form.email')}
        id="email"
        type="email"
      />
      <Input
        placeholder="+91 1234512345"
        onChange={() => {}}
        label={t('auth.form.phone')}
        id="phone"
        type="number"
        icon="phone"
      />
      <Input
        placeholder="dd-mm-yyyy"
        onChange={() => {}}
        label={t('auth.form.dob')}
        id="dob"
        type="date"
      />
    </div>
  );
};

export default PersonalDetails;
