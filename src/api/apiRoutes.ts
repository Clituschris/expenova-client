const apiRoutes = {
  HEALTH: '/health/',
  VERIFY_TOKEN: '/api/v1/auth/verify-token',
  LOGIN: '/api/v1/auth/login',
  SIGNUP: '/api/v1/auth/signup',
  SIGNUP_VERIFY: '/api/v1/auth/signup/verify',
  RESET_PASSWORD_KEY: '/api/v1/auth/resetpassword/resetkey',
  RESET_PASSWORD: '/api/v1/auth/resetpassword'
} as const;

export default apiRoutes;
