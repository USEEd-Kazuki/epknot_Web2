import React, { useEffect, useRef } from 'react';
import './MainMessage.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MainMessage = () => {
  const catchCopyRef = useRef(null);
  const messageLinesRef = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // スマホでは即時表示
      if (catchCopyRef.current) {
        catchCopyRef.current.style.opacity = 1;
        catchCopyRef.current.style.transform = 'none';
      }

      messageLinesRef.current.forEach((el) => {
        if (el) {
          el.style.opacity = 1;
          el.style.transform = 'none';
        }
      });
    } else {
      // PCではアニメーションを適用
      gsap.fromTo(
        catchCopyRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: catchCopyRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        messageLinesRef.current,
        { opacity: 0, x: -5, y: 5 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: messageLinesRef.current[0],
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      ScrollTrigger.refresh(); // iOS描画対策
    }
  }, []);

  return (
    <section className="catch-section">
      <div ref={catchCopyRef} className="catch-copy">
        <h2>We value each and every work.</h2>
      </div>
      <div className="message">
        <p ref={(el) => (messageLinesRef.current[0] = el)}>
          Transformationを繰り返し、新しい可能性を探し続けます。
        </p>
        <p ref={(el) => (messageLinesRef.current[1] = el)}>
          目まぐるしく形を変え続ける世界の中で、昨日までの方程式は、今日には適しないものとなってしまいます。
        </p>
        <p ref={(el) => (messageLinesRef.current[2] = el)}>
          しかし、変革を進化と捉えれば、そこにはまだ見ぬビジネスの可能性が眠っていると考えます。
        </p>
      </div>
    </section>
  );
};

export default MainMessage;
