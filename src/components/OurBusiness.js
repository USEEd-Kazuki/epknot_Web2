import React, { useRef } from 'react';
import './OurBusiness.css'; // スタイリング用の別CSSファイル

const OurBusiness = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const contents = [
    {
      BussinessTitle: '国内外市場を見据えた迅速なソリューション提供とビジネス拡大支援',
      Details: '弊社は、国内外の市場動向を素早く把握し、最新のマーケット情報をもとにお客様のニーズに即した最適なソリューションを提供しております。海外顧客のトレンドや国内のニーズをリアルタイムで収集・分析し、双方に適した案件・サービスの提案や案件組成を行うことで、お客様のビジネス拡大を支援します。\n\n お客様と密に連携し、迅速な対応で価値ある提案を提供することにより、長期的なパートナーシップを築き、持続的な成長を目指しています。'
    },
    {
      number: '01',
      title: 'SOURCING',
      description: '最高の１件を、お客様とご一緒に組成します。',
      details: '海外の様々なネットワークを通じ、S&P、TC/BBC project、Sales and Lease Back等の案件打診を受けます。今のニーズに合わせてストラクチャーや主要条件の大枠を調整していきます'
    },
    {
      number: '02',
      title: 'NEGOTIATION',
      description: 'お客様のご要望を捉えて、海外と交渉を行います。',
      details: '国内船主・金融機関のニーズに合わせて、案件紹介初期の段階で海外のカウンターパーティとの条件交渉を行います。税務・財務に精通したメンバーにより、投資・税務・融資の幅広い面から国内ニーズにマッチするように、海外のカウンターパーティと交渉をすることが可能です。また顧客のニーズにあうように一件一件丁寧に交渉を行っていきます。'
    },
    {
      number: '03',
      title: 'FINANCE ARRANGEMENT',
      description: 'ファイナンスに精通したメンバーが、お客様のサポートを行います。',
      details: '案件紹介とあわせて、融資可能な金融機関のアレンジのお手伝いを致します。船舶融資に精通している金融機関との連携により、その金融機関の融資条件等（特徴）を把握することで、その案件にあった金融機関の紹介が可能となります。'
    },
    {
      number: '04',
      title: 'DOCUMENTATION',
      description: 'お客様に代わり丁寧でスピーディーな契約書作成を行います。',
      details: '売買契約・傭船契約を案件毎に合わせてご準備致します。量も多く、英語である売買契約書・傭船契約書の熟読は大変時間を要する作業であるため、主要条件と照らし合わせて解説書等を作成し、要点の説明を行っております。'
    },
    {
      number: '05',
      title: 'PROJECT MANAGEMENT',
      description: '関係各所と柔軟に連携を行い、円滑な案件管理を行います。',
      details: '融資承認後、クロージングまでに必要となる手続き（所有権・抵当権の設定、セキュリティドキュメント作成など）において、登記手続きは弊社が一括して代理業務を行い、融資・担保契約は海事弁護士と連携して円滑にクロージングまで進めて行きます。弊社が当事者と連携して案件全体の管理を行うことで、スケジュールに遅延なくスムーズにクロージングを迎えるように努めております。'
    },
    {
      number: '06',
      title: 'POST MANAGEMENT',
      description: '一隻一隻、丁寧に管理をし、お客様のご要望にお応えします。',
      details: '傭船者の与信管理や、傭船料の請求書作成、保険期日管理等を行っております。主担副担にて管理表作成のもと管理を行っております。'
    }
  ];

  return (
    <section className="OurBusiness-container">
      <div className="OurBusiness-left-title" ref={titleRef}>
        <h1>OUR <br /> BUSINESS</h1>
      </div>
      <div className="OurBusiness-right-content" ref={contentRef}>
        {contents.map((content, index) => (
          <div className={`OurBusiness_viewpoint ${index === 0 ? 'OurBusiness_first' : 'OurBusiness_technology'}`} key={index}>
            <div className="OurBusiness_header-container">
              {content.number && <span className="OurBusiness_viewpoint-number">{content.number}</span>}
              <h2>{content.BussinessTitle || content.title}</h2>
            </div>
            <div className="OurBusiness-content-container">
              <div className="OurBusiness-description-details">
                <h3>{content.description}</h3>
                <p >{content.Details || content.details}</p>
              </div>
              {index !== 0 && <div className={`OurBusiness-color-block color-block-${index}`}></div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBusiness;
