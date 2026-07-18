import { Navigate, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import ROUTES from '@app/routes';
import AppInitializer from './appInitializer/AppInitializer';
import ProtectedRoute from './protectedRoute/ProtectedRoute';

import { TOKEN } from '@app/utility/constants';
import { Login, Signup, ForgotPassword } from '@app/modules/auth';
import { Dashboard } from '@app/modules/dashboard';

const RootRedirect = () => (
  <Navigate to={Cookies.get(TOKEN) ? ROUTES.DASHBOARD : ROUTES.LOGIN} replace />
);

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<AppInitializer />}>
        <Route path={ROUTES.BASE} element={<RootRedirect />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
        <Route path={ROUTES.FORGET_PASSWORD} element={<ForgotPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MainRouter;
