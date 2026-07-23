/** libraries **/
import { useMemo, useState, useRef, type FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

/** css **/
import styles from './ProfileView.module.css';

/** types **/
import type { Props } from './ProfileView.type';
import type { RootState } from '@app/redux/store';

/** icons **/
import { Caret, Logout, User } from '@app/icons';

/** utils **/
import { logoutApp } from '@app/utility/commonServices';

/** components **/
import { Dropbox } from '@app/components';

const ProfileView: FC<Props> = ({ view }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  const name = useSelector((state: RootState) => state.authReducer.user?.name);
  const email = useSelector(
    (state: RootState) => state.authReducer.user?.email
  );

  const badgeText = useMemo(() => {
    const _name = name || 'U';

    return _name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0].toUpperCase())
      .join('');
  }, [name]);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleViewProfile = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    logoutApp();
  };

  return (
    <>
      <div
        className={styles.container}
        ref={containerRef}
        onClick={handleToggleMenu}
      >
        <div className={styles.textContainer}>{badgeText}</div>
        {view === 'normal' ? (
          <div className={styles.detailContainer}>
            <div className={styles.name}>{name}</div>
            <div className={styles.email}>{email}</div>
          </div>
        ) : null}
        <div className={styles.caret}>
          {view === 'normal' ? <Caret direction="right" /> : null}
        </div>
      </div>
      <Dropbox
        targetRef={containerRef}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        portal="popup"
      >
        <div className={styles.menu}>
          <button
            type="button"
            className={styles.menuItem}
            onClick={handleViewProfile}
          >
            <User />
            {t('auth.viewprofile')}
          </button>
          <button
            type="button"
            className={styles.menuItem}
            onClick={handleLogout}
          >
            <Logout />
            {t('auth.logout')}
          </button>
        </div>
      </Dropbox>
    </>
  );
};

export default ProfileView;
