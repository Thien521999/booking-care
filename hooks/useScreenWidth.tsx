import { useEffect, useState } from 'react';

export const useScreenWidth = () => {
  let getWidth: Number | String = '';
  if (typeof window !== 'undefined') {
    getWidth = window.innerWidth;
  }
  const [width, setWidth] = useState(getWidth);

  useEffect(() => {
    const handler = (event: any) => {
      setWidth(event.target.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handler);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handler);
      }
    };
  }, []);

  return width;
};
