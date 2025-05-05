import React from 'react';
import './WhoCompaney.css';

const WhoCompaney = () => {
    const encryptedEmail = 'example&#64;domain&#46;com'; // セキュリティ対策でメールアドレスを暗号化

    return (
      <section className="WhoCompaney">
        <h1>Who we are</h1>
        <div className="WhoCompaney-message">
          <p>
          EPknoTは、海運業界において、商業船舶の新造船及び中古船における売買や傭船の仲介、セールスアンドリースバックなどのファイナンス案件組成、船舶融資におけるファイナンスアレンジメントなど船舶に関する様々なサービスを提供するブローカーハウスです。ブローカー事業を主軸とした関連事業を通して、世界の物流を担い人々の生活を支える海運業界での船舶需給を結びつけることで、その発展に寄与することを目的に設立しました。
          </p>

          <p>
          弊社は楽しく（Enjoy）、プロフェッショナル（Proffessional）にそして革新的（Transformation）にを企業理念に活動を行っております。
          </p>
        </div>
      </section>
    );
};

export default WhoCompaney;
