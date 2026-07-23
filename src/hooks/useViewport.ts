import { useEffect, useState } from 'react';

export default function useViewport() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    });
  }, []);

  return { isDesktop };
}
