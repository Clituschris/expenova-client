import { memo, type FC } from 'react';

interface Props {
  size?: number;
  color?: string;
}

const Add: FC<Props> = ({ size = 1, color = '#000' }) => {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  );
};

export default memo(Add);
