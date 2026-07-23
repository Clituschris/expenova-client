import { memo, type FC } from 'react';

interface Props {
  size?: number;
  color?: string;
}

const More: FC<Props> = ({ size = 1, color = '#000' }) => {
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
      <circle cx="5" cy="12" r="1.5" fill={color} />
      <circle cx="12" cy="12" r="1.5" fill={color} />
      <circle cx="19" cy="12" r="1.5" fill={color} />
    </svg>
  );
};

export default memo(More);
