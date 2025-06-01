import React from 'react';
import './FixCom.css';

const FixCom = () => {
    const encryptedEmail = 'example&#64;domain&#46;com'; // セキュリティ対策でメールアドレスを暗号化

    return (
      <section className="FixCompaney">
        <div className='fixComSection'>
        <h1>FIXTURE</h1>
        <div className="FixCompaney-message">
          <p>
          弊社はこれまでに70隻以上のSLB案件の成約に至っており、これはファイナンス市場規模で置き換えると1,500億円程度となります。年間平均では10隻程度の案件成約となっております。
          </p>
        </div>
        </div>
      </section>
    );
};

export default FixCom;
