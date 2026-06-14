import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import Login from '../modules/auth/login/Login';
import SignUp from '../modules/auth/signup/Signup';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<div>Home</div>} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
