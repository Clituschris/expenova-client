import { memo } from 'react';

const Eye = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M1 12C1 12 5 5 12 5C19 5 23 12 23 12C23 12 19 19 12 19C5 19 1 12 1 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

export default memo(Eye);
