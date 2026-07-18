import { Button } from '@app/components';
import { logoutApp } from '@app/utility/commonServices';

const Dashboard = () => {
  return <Button text="logout" onClick={logoutApp} />;
};

export default Dashboard;
