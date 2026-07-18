type ButtonVariant = 'primary' | 'danger';
type ButtonSize = 'lg' | 'md' | 'sm';
type ButtonType = 'button' | 'submit' | 'reset';

export interface Props {
  text: string;
  onClick?: () => void;
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  outlined?: boolean;
  loading?: boolean;
  disabled?: boolean;
}
