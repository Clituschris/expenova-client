import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { SplashScreen } from '@app/layout';
import useAuth from '@app/hooks/useAuth';

const AppInitializer = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { initializer } = useAuth();

  const initiateApp = async () => {
    await initializer();
    setIsLoading(false);
  };

  useEffect(() => {
    initiateApp();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return <Outlet />;
};

export default AppInitializer;
