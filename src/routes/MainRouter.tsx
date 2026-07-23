import { Route, Routes } from 'react-router-dom';
import ROUTES from '@app/routes';
import AppInitializer from './appInitializer/AppInitializer';

import { Login, Signup, ForgotPassword, BaseRedirect } from '@app/modules/auth';
import { Dashboard } from '@app/modules/dashboard';
import ProtectedRoute from './protectedRoute/ProtectedRoute';

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<AppInitializer />}>
        <Route path={ROUTES.BASE} element={<BaseRedirect />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
        <Route path={ROUTES.FORGET_PASSWORD} element={<ForgotPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.TRANSACTIONS} element={<Dashboard />} />
          <Route path={ROUTES.REPORTS} element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MainRouter;
