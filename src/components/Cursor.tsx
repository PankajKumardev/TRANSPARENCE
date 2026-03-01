import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringGlass, setIsHoveringGlass] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (target.closest('.glass-fluted') || target.closest('.glass-frosted') || target.closest('.glass-hover-effect')) {
        setIsHoveringGlass(true);
      } else {
        setIsHoveringGlass(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      className={`custom-cursor ${isHoveringGlass ? 'hovering-glass' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
