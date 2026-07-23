/** libraries **/
import { Link, useLocation } from 'react-router-dom';

/** css **/
import styles from './Sidebar.module.css';

/** constants **/
import menubarItems from './contants/menubarItems';

/** icons **/
import { LogoText } from '@app/icons';

/** types **/
import type { MenuItem } from './Sidebar.type';

/** utils **/
import { cn } from '@app/utility/helpers';
import { ProfileView } from '@app/components';

const MenuItem = (props: MenuItem) => {
  const { name, path, icon: Icon } = props;

  const location = useLocation();
  const active = location.pathname === path;
  const color = active ? 'var(--primary-text)' : 'var(--text-faded)';
  return (
    <Link
      to={path}
      className={cn(styles.menuItem, { [styles.active]: active })}
    >
      <Icon color={color} />
      <div className={styles.menuItemLink}>{name}</div>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <LogoText />
      </div>
      <div className={styles.menuItemContainer}>
        {menubarItems.map((item) => (
          <MenuItem {...item} key={item.id} />
        ))}
      </div>
      <div className={styles.sidebarFooter}>
        <ProfileView view="normal" />
      </div>
    </div>
  );
};

export default Sidebar;
