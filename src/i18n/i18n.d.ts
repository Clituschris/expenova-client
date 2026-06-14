import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: {
        auth: {
          login: string;
          email: string;
          password: string;
          forgot: string;
        };
      };
    };
  }
}
