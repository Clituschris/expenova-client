import { memo } from 'react';

const User = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20" />
    </svg>
  );
};

export default memo(User);
