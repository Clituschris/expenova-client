/** types **/
import type { FC } from 'react';
import type { Props } from './AppLayout.type';

/** css **/
import styles from './AppLayout.module.css';

/** icons **/
import { Logo } from '@app/icons';

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo size={1} />
        </div>
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default AppLayout;
