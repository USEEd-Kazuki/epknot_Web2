import React, { useEffect, useRef } from 'react';
import './MainMessage.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MainMessage = () => {
  const catchCopyRef = useRef(null);
  const messageLinesRef = useRef([]);

  useEffect(() => {
    // Catch-Copyのアニメーション (左から出現)
    gsap.fromTo(
      catchCopyRef.current,
      { opacity: 0, x: -40 }, // 左から (x軸方向に -100px)
      {
        opacity: 1,
        x: 0, // 元の位置に戻る
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: catchCopyRef.current,
          start: 'top 90%', // セクションが90%見えた時にアニメーション開始
          toggleActions: 'play none none none',
        },
      }
    );

    // Messageのアニメーション (各行を少しずつずらして出現)
    gsap.fromTo(
      messageLinesRef.current,
      { opacity: 0, x: -10, y: 10 }, // 左下から (より近い位置)
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.2, // 0.2秒ごとに各行をずらしてアニメーション
        scrollTrigger: {
          trigger: messageLinesRef.current[0], // 最初の行がトリガー
          start: 'top 80%', // メッセージ部分が80%見えた時に発火
          toggleActions: 'play none none none',
        },
      }
    );
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
