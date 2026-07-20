import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveringGlass, setIsHoveringGlass] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const target = e.target as HTMLElement;
      const overGlass = Boolean(
        target.closest('.glass-fluted') ||
          target.closest('.glass-frosted') ||
          target.closest('.glass-sheet') ||
          target.closest('.glass-hover-effect'),
      );
      setIsHoveringGlass(overGlass);
    };

    const hide = () => setVisible(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseleave', hide);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', hide);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHoveringGlass ? 'hovering-glass' : ''} ${visible ? '' : 'hidden-cursor'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
