import { useEffect, useRef, useState } from 'react';

export default function PageFrame({ src, title }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(800);

  const resize = () => {
    const f = ref.current;
    if (!f) return;
    try {
      const doc = f.contentDocument;
      const body = doc?.body;
      if (!doc || !body) return;
      const contentElement = doc.querySelector('main') || [...body.children].reverse().find(
        (element) => element.getBoundingClientRect().height > 0
      );
      const contentBottom = contentElement
        ? contentElement.getBoundingClientRect().bottom
        : body.getBoundingClientRect().bottom;
      const nextHeight = Math.ceil(Math.max(contentBottom, 100));
      setHeight(nextHeight);
    } catch (e) {
      // Same-origin /pages/ should be readable, but keep the frame stable if not.
    }
  };

  useEffect(() => {
    setHeight(800);
  }, [src]);

  useEffect(() => {
    const f = ref.current;
    let observer;
    const attachObserver = () => {
      try {
        const body = f?.contentDocument?.body;
        if (!body || !window.ResizeObserver) return;
        observer = new ResizeObserver(resize);
        observer.observe(body);
      } catch (e) {
        // Ignore observer setup issues; interval/onLoad still resize the frame.
      }
    };

    const id = setInterval(resize, 300);
    attachObserver();
    return () => {
      clearInterval(id);
      observer?.disconnect();
    };
  }, [src]);

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
