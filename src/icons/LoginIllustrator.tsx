import { memo } from 'react';
import type { FC } from 'react';

interface Props {
  invert?: boolean;
}

const LoginIllustrator: FC<Props> = ({ invert = false }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 123 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: invert ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
    >
      <path
        d="M88.9715 52.6535L76.4273 42.0799L81.9273 36.1535L88.9715 42.0799L92.6388 38.2326L88.7916 34.5654L103.927 32.6535L102.204 48.6496L97.8995 43.962L88.9715 52.6535Z"
        fill="hsl(var(--theme), 100%, 50%, 0.1)"
      />
      <path
        d="M0 56.5H11.5L30.5 36.5L42.5 48L62.5 27.5L69 34.5L74.5 28.5L62.5 16.5L42.5 37.5L30.5 26L0 56.5Z"
        fill="hsl(var(--theme), 100%, 50%, 0.1)"
      />
      <path
        d="M22.5 31.5L17 37L3 23.5L15 24L22.5 31.5Z"
        fill="hsl(var(--theme), 100%, 50%, 0.1)"
      />
      <path
        d="M30.5 39.5L25 45L43.5 61.5L63 41.5L70 48L87 29L109 26.5L107.5 35H113L123 21.5L111 10.5H104.5L109 18.5L82.5 21.5L69 36.5L63 30.5L42.5 50.5L30.5 39.5Z"
        fill="hsl(var(--theme), 100%, 50%, 0.1)"
      />
      <path
        d="M47 79L28.5 78.5L33.5 72L14 56.5L19.5 50.5L38.5 67L43 62.2737L47 79Z"
        fill="hsl(var(--theme), 100%, 50%, 0.1)"
      />
      <path
        d="M60 1.24826e-07L57 13L54 10L36 29L31.5 25L50 5.49999L46 1.5L60 1.24826e-07Z"
        fill="hsl(var(--theme), 100%, 50%, 0.1)"
      />
      <path
        d="M78.5 63.5L61 60.9999L65.5 56.4999L57.473 49.4673L62.973 43.4673L70.5 50.4999L74.5 46.4999L78.5 63.5Z"
        fill="hsl(var(--theme), 100%, 50%, 0.1)"
      />
      <path
        d="M84.4533 0.463383L81.4475 17.8836L77.0797 13.2552L69.8175 21.0751L63.9793 15.4037L71.227 8.08348L67.3445 3.96931L84.4533 0.463383Z"
        fill="hsl(var(--theme), 100%, 50%, 0.1)"
      />
    </svg>
  );
};

export default memo(LoginIllustrator);
