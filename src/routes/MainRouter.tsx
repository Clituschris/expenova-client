import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import { AuthLayout } from '@app/modules/auth';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthLayout layoutType="login" />} />
      <Route path="/signup" element={<AuthLayout layoutType="signup" />} />
      <Route
        path="/forgotpassword"
        element={<AuthLayout layoutType="forgotpassword" />}
      />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<div>Home</div>} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
