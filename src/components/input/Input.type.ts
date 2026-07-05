type IconTypes = 'user' | 'phone';

export interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  placeholder?: string;
  icon?: IconTypes;
  type?: string;
  value?: string;
  label?: string;
}
