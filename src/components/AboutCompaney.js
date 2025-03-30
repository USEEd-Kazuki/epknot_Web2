import React from 'react';
import './AboutCompaney.css';

const AboutCompaney = () => {
    const encryptedEmail = 'example&#64;domain&#46;com'; // セキュリティ対策でメールアドレスを暗号化

    return (
      <section className="company-info">
        <h1>COMPANY</h1>
        <div className="company-info-message">
          <h2>Our Message</h2>
          <p>
          EPknoTは、商業船舶の新造船及び中古船における売買や傭船の仲介、セールスアンドリースバックなどのファイナンス案件組成、 船舶融資におけるファイナンスアレンジメントなど船舶に関する様々なサービスを提供するブローカーハウスです。 これまで日本全国のお客様と65件の案件組成実績があります。また、マーケットレポートや傭船者レポート作成及び提供なども積極的に行っています。
          </p>
        </div>

        <div className="company-description">
          <h2>Our Business</h2>
          <p>
            EPknoTは、商業船舶の新造船及び中古船における売買や傭船の仲介、セールスアンドリースバックなどのファイナンス案件組成、<br />
            船舶融資におけるファイナンスアレンジメントなど、様々なサービスを提供するブローカーハウスです。
          </p>
        </div>

        <div className="company-description">
          <h2>PARTNERS</h2>
          <div className="alinece_content">
            <div className="sylan_logo">
            <img src="./Images/greig.png" alt="greigLogo" className="greig" />
            </div>
            <div className='aliance_subcontent'>
            <p>
            この度、弊社はヨーロッパにおける事業拡大を目的として、ノルウェーにて Grieg Shipbrokers KS社と共同で合弁会社「Grieg EPknoT Co., Ltd」を設立致しました。<br />
             今後、海運市場の動向や世界情勢に対応した情報提供、及び案件ソーシングを通じて サービスの更なる向上を目指してまいります。
            </p>
            </div>
          </div>
        </div>
        
{/*

        <div className="company-description">
          <h2>ALIANCE</h2>
          <div className="alinece_content">
            <div className="sylan_logo">
              <img src="./Images/greig.png" alt="greigLogo" className="greig" />
            </div>
            <div className='aliance_subcontent'>
            <p>
            私たちは、共通の価値観を持ち、共に成長できる企業とAllianceを結成することで、お客様へより高品質なサービスを提供致します。<br/>
            グループ企業の強みを生かし、EPknoTだけでは得ることの出来ない最新のマーケット情報やビジネスチャンスをお客様へお届けします。
            </p>
            <h3>加盟会社</h3>
            <p>
            Blue Ocean Japan Co., Ltd.
            </p>
            <p>
            Newton Ship Co., Ltd.
            </p>
            </div>
          </div>
        </div>

*/}

        <div className="company-details">
          <h2>Company Information</h2>
          <ul>
            <li><strong>社名:</strong> 株式会社EPknoT (EPknoT Co., Ltd.)</li>
            <li><strong>設立:</strong> 2020年 11月 18日</li>
            <li><strong>取締役代表:</strong> 山本 尚季 (Yamamoto Naoki)</li>
            <li><strong>住所:</strong> 〒 104-0061 東京都中央区銀座7-3-7 ブランエスパ 6F</li>
            <li><strong>主要事業:</strong> 船舶売買に関する仲介業及び、これに関するコンサルティング、リサーチ業</li>
          </ul>
        </div>
      </section>
    );
};

export default AboutCompaney;
