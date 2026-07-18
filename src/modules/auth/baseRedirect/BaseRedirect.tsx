import { Navigate } from 'react-router-dom';
import useAuth from '@app/hooks/useAuth';
import ROUTES from '@app/routes';

const BaseRedirect = () => {
  const { isAuth } = useAuth();

  const path = isAuth ? ROUTES.DASHBOARD : ROUTES.LOGIN;

  return <Navigate to={path} replace />;
};

export default BaseRedirect;
