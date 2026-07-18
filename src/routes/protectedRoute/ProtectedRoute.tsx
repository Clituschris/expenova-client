import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

import ROUTES from '@app/routes';
import useAuth from '@app/hooks/useAuth';
import { TOKEN } from '@app/utility/constants';
import { AppLayout } from '@app/layout';

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  const { verifyToken } = useAuth();

  const checkAuth = async () => {
    const token = Cookies.get(TOKEN);
    if (!token) {
      setIsAuth(false);
    } else {
      const status = await verifyToken();
      setIsAuth(status);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (isAuth === null) {
    return <div>Loading</div>;
  }

  return isAuth ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to={ROUTES.LOGIN} replace />
  );
};

export default ProtectedRoute;
