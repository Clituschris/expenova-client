import { memo, type FC } from 'react';

interface Props {
  showIndicator?: boolean;
}

const Notification: FC<Props> = ({ showIndicator = false }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="var(--black)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
        stroke="var(--black)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.73 21a2 2 0 0 1-3.46 0"
        stroke="var(--black)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {showIndicator ? (
        <circle
          cx="18"
          cy="6"
          r="4"
          fill="var(--danger)"
          stroke="white"
          strokeWidth="1.5"
        />
      ) : null}
    </svg>
  );
};

export default memo(Notification);
