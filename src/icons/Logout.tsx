import { memo } from 'react';

const Logout = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 17L21 12L16 7" />
      <path d="M21 12H9" />

      <path d="M13 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3H13" />
    </svg>
  );
};

export default memo(Logout);
