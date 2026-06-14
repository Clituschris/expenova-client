type IconTypes = 'user';

export interface Props {
  icon?: IconTypes;
  type: string;
  placeholder: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
