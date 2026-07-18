import type { FC } from 'react';

interface Props {
  color?: string;
}

const SvgErrorIcon: FC<Props> = ({ color = '#ffffff' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
    <line
      x1="7"
      y1="17"
      x2="17"
      y2="7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default SvgErrorIcon;
