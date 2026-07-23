/** types **/
import type { FC } from 'react';
import type { Props } from './AppLayout.type';

/** css **/
import styles from './AppLayout.module.css';

/** components **/
import { Header, Sidebar, BottomNavbar } from '@app/components';

/** hooks **/
import useViewport from '@app/hooks/useViewport';

const AppLayout: FC<Props> = ({ children }) => {
  const { isDesktop } = useViewport();
  return (
    <div className={styles.container}>
      {isDesktop ? <Sidebar /> : null}
      <div className={styles.mainLayout}>
        <Header />
        <main className={styles.content}>{children}</main>
        {!isDesktop ? <BottomNavbar /> : null}
      </div>
    </div>
  );
};

export default AppLayout;
