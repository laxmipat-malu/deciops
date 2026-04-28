import { useEffect, useRef, useState } from 'react';

export default function PageFrame({ src, title }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(2400);

  const resize = () => {
    const f = ref.current;
    if (!f) return;
    try {
      const doc = f.contentDocument;
      if (!doc) return;
      const h = Math.max(
        doc.documentElement.scrollHeight,
        doc.body?.scrollHeight || 0
      );
      if (h > 100) setHeight(h);
    } catch (e) {
      // cross-origin — should not happen for same-origin /pages/
    }
  };

  useEffect(() => {
    const id = setInterval(resize, 600);
    return () => clearInterval(id);
  }, []);

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      onLoad={resize}
      style={{
        width: '100%',
        border: 'none',
        height: `${height}px`,
        display: 'block',
      }}
    />
  );
}
