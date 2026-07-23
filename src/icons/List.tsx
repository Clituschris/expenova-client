import { memo, type FC } from 'react';

interface Props {
  size?: number;
  color?: string;
}

const List: FC<Props> = ({ size = 1, color = '#000' }) => {
  const height = size * 18;
  const width = size * 18;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="4" cy="6" r="1.5" fill={color} />
      <path d="M9 6h11" />
      <circle cx="4" cy="12" r="1.5" fill={color} />
      <path d="M9 12h11" />
      <circle cx="4" cy="18" r="1.5" fill={color} />
      <path d="M9 18h11" />
    </svg>
  );
};

export default memo(List);
