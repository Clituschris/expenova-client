import { memo, type FC } from 'react';

interface Props {
  size?: number;
  color?: string;
}

const Dashboard: FC<Props> = ({ size = 1, color = '#000' }) => {
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
      <rect x="3" y="3" width="7" height="9" rx="1" fill={color} />
      <rect x="14" y="3" width="7" height="5" rx="1" fill={color} />
      <rect x="14" y="12" width="7" height="9" rx="1" fill={color} />
      <rect x="3" y="16" width="7" height="5" rx="1" fill={color} />
    </svg>
  );
};

export default memo(Dashboard);
