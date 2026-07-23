/** library **/
import { useSelector } from 'react-redux';

/** css **/
import styles from './Header.module.css';

/** types **/
import type { RootState } from '@app/redux/store';

/** icons **/
import { Notification, Settings, User } from '@app/icons';

/** components **/
import { ProfileView } from '@app/components';

const Header = () => {
  const name = useSelector((state: RootState) => state.authReducer.user?.name);
  return (
    <header className={styles.header}>
      <div>
        {name ? (
          <div className={styles.userName}>
            <User size={1.5} color='var(--primary)' />
            <div>{name}</div>
          </div>
        ) : null}
      </div>
      <div className={styles.actionIcons}>
        <div className={styles.actionIcon}>
          <Notification showIndicator />
        </div>
        <div className={styles.actionIcon}>
          <Settings />
        </div>
        <div className={styles.actionIcon}>
          <ProfileView view="minimized" />
        </div>
      </div>
    </header>
  );
};

export default Header;
