import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';
import { TOKEN } from '../../utility/constants';

const ProtectedRoute = () => {
  const Auth = () => {
    const user = Cookies.get(TOKEN);
    return !!user;
  };

  return (
    <div>
      <div>
        {Auth() ? (
          <div className="protected__layout__main__content">
            <Outlet />
          </div>
        ) : (
          <Navigate to="login" replace />
        )}
      </div>
    </div>
  );
};

export default ProtectedRoute;
