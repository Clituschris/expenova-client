import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { resetStore } from '@app/redux/store';
import ROUTES from '@app/routes';
import { TOKEN } from '@app/utility/constants';
import { Button } from '@app/components';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove(TOKEN);
    resetStore();
    navigate(ROUTES.LOGIN, { replace: true });
  };
  return <Button text="logout" onClick={handleLogout} />;
};

export default Dashboard;
