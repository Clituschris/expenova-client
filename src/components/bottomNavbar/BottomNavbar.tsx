/** library **/
import { useNavigate, useLocation } from 'react-router-dom';

/** css **/
import styles from './BottomNavbar.module.css';

/** types **/
import type { NavbarItem } from './BottomNavbar.type';

/** constants **/
import NAVBARS from './contants/navbars';

/** utils **/
import { cn } from '@app/utility/helpers';

const NavbarItem = (props: NavbarItem) => {
  const { path, icon: Icon, isButton } = props;

  const location = useLocation();
  const navigate = useNavigate();

  const active = isButton || location.pathname === path;
  const color = active ? 'var(--primary)' : 'var(--text-faded)';

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div
      className={cn(styles.menuItem, { [styles.active]: active })}
      onClick={handleClick}
    >
      <Icon color={color} size={1.75} />
    </div>
  );
};

const BottomNavbar = () => {

  return (
    <>
      <div className={styles.container}>
        {NAVBARS.map((item) => (
          <NavbarItem {...item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default BottomNavbar;
