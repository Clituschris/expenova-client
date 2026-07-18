import ROUTES from '@app/routes';

export const TOKEN = 'token';

export const API_URL = import.meta.env.VITE_API_URL;

export const PUBLIC_ROUTES = [
  ROUTES.LOGIN,
  ROUTES.SIGNUP,
  ROUTES.FORGET_PASSWORD
];
