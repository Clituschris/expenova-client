type ButtonVariant = 'primary' | 'danger';
type ButtonSize = 'lg' | 'md' | 'sm';

export interface Props {
  text: string;
  onClick: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
}
