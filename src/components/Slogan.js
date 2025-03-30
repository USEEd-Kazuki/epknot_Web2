import React, { useEffect, useRef } from 'react';
import './Slogan.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anchor from '../assets/Svgs/anchor.svg';

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const anchorIconRef = useRef(null);
  const viewpointsRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // スマホ：アニメーションなしで即時表示
      if (viewpointsRef.current) {
        viewpointsRef.current.style.opacity = 1;
        viewpointsRef.current.style.transform = 'none';
      }
    } else {
      // PC：GSAPアニメーション適用
      gsap.fromTo(
        viewpointsRef.current,
        { opacity: 0, x: -10, y: 10 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: viewpointsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      ScrollTrigger.refresh(); // iOS描画対策
    }
  }, []);

  return (
    <section className="UniqueID_what-we-do">
      <div className="UniqueID_gradient-background"></div>

      <div className="UniqueID_content-container">
        <div className="UniqueID_heading-container">
          <img
            src={anchor}
            alt="Anchor"
            className="UniqueID_anchor-icon"
            ref={anchorIconRef}
          />
          <h1 className="UniqueID_heading">What we do</h1>
        </div>

        <p className="UniqueID_main-text">
          迅速で柔軟なサポートと、世界中に広がるビジネスチャンスを活かした高品質なサービスを提供します。
        </p>

        <div className="UniqueID_viewpoints" ref={viewpointsRef}>
          <div className="UniqueID_viewpoint UniqueID_technology">
            <div className="UniqueID_header-container">
              <span className="UniqueID_viewpoint-number">01</span>
              <h2>サポートとサービスの徹底</h2>
            </div>
            <h3>お客様の未来を見据えた、最適なサポートを。迅速かつ柔軟に。</h3>
            <p>
              私たちはお客様に寄り添い、常に最適なソリューションを提供することを第一に考えています。お客様のニーズを深く理解し、迅速かつ柔軟に対応するための体制を整えています。
              マーケットの状況やトレンドを正確に捉えるだけでなく、将来的な変化や課題に対しても先見の明を持ち、事前に準備を行います。
              <br /><br />
              また、私たちが開発した独自のシッピングモデルは、従来の枠にとらわれない柔軟さと効率性を兼ね備えています。
              これにより、案件ごとに最適な組み合わせを構築し、品質の高い成果を確実にお届けします。
              お客様には、洗練されたプロセスと信頼性の高いサポートを通じて、安心してご依頼いただける環境を提供しています。
            </p>
          </div>

          <div className="UniqueID_viewpoint UniqueID_business">
            <div className="UniqueID_header-container">
              <span className="UniqueID_viewpoint-number">02</span>
              <h2>ビジネスの視点</h2>
            </div>
            <h3>世界中のビジネスチャンスを、価値ある成果に変える。</h3>
            <p>
              EPknoTは、グローバルな視点を持ち、世界各国に散らばる潜在的なビジネスチャンスを積極的に見つけ出します。
              ただ単に市場の動向を追うのではなく、私たちは独自のリサーチとネットワークを駆使して、将来の可能性を見据えた価値ある機会を探し出します。
              <br /><br />
              私たちが提供するサービスは、単なる商品やソリューションの提供に留まりません。
              世界中のパートナーと連携し、持続可能なビジネスモデルを追求することで、
              経済的な発展だけでなく、社会的価値の創出にも貢献しています。
              私たちの使命は、お客様にとって信頼できるビジネスパートナーとして、
              グローバル市場での成功をサポートし、共に成長し続けることです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
