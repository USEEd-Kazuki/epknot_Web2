import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const Main = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      h1Ref.current,
      { opacity: 0, y: 10 }, // 初期状態
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5 } // 終了状態
    );
    gsap.fromTo(
      pRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, delay: 1 }
    );
  }, []);

  return (
    <main className="Hero-content">
      <section className="hero">
        <h1 ref={h1Ref} className='HeroP'>Welcome to EPknoT</h1>
        <p ref={pRef}>We value each and every work.</p>
      </section>
    </main>
  );
};

export default Main;
