import { animate, useInView, useIsomorphicLayoutEffect } from 'framer-motion';
import { useRef } from 'react';

const AnimatedCounter = ({ from, to, animationOptions }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;
    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: 1.5,
      ease: 'easeOut',
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value
          .toFixed(0)
          .toString()
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
      },
    });
    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);
  return <span ref={ref} />;
};

export default AnimatedCounter;
