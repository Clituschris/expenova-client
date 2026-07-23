import { type FC, memo } from 'react';

interface Props {
  direction: 'up' | 'down' | 'left' | 'right';
}

const PATHS: Record<Props['direction'], string> = {
  up: 'M6 15l6-6 6 6',
  down: 'M6 9l6 6 6-6',
  left: 'M15 6l-6 6 6 6',
  right: 'M9 6l6 6-6 6'
};

const Caret: FC<Props> = ({ direction }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={PATHS[direction]}
        stroke="var(--black)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(Caret);
