type ClassValue = string | undefined | null | false | Record<string, boolean>;

export function cn(...args: ClassValue[]): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (!arg) return;

    if (typeof arg === 'string') {
      classes.push(arg);
    } else if (typeof arg === 'object') {
      Object.entries(arg).forEach(([key, value]) => {
        if (value) classes.push(key);
      });
    }
  });

  return classes.join(' ');
}

export const ERROR_MESSAGE_I18N_KEYS: Record<number, string> = {
  400: 'error.api.badRequest',
  401: 'error.api.unauthorized',
  403: 'error.api.forbidden',
  404: 'error.api.notFound',
  409: 'error.api.conflict',
  422: 'error.api.validation',
  500: 'error.api.serverError'
};

export const errorCodeToMessage = (error: unknown) => {
  if (typeof error === 'number') {
    return ERROR_MESSAGE_I18N_KEYS[error] || ERROR_MESSAGE_I18N_KEYS[500];
  }

  return (error as Error).message;
};

export const loadSlashScreen = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
};
