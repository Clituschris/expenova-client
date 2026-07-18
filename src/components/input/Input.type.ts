import type { ReactNode } from 'react';

type IconTypes = 'user' | 'phone';

export interface Props {
  id: string;
  name: string;
  placeholder?: string;
  icon?: IconTypes;
  type?: string;
  value?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  headerLink?: ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}
