import { Navigate, Outlet } from 'react-router-dom';

import ROUTES from '@app/routes';
import useAuth from '@app/hooks/useAuth';
import { AppLayout } from '@app/layout';

const ProtectedRoute = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to={ROUTES.LOGIN} replace />
  );
};

export default ProtectedRoute;
