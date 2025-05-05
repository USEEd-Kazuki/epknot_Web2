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
          弊社はこれまでに70隻以上の主にSLB案件の成約に至っており、これはファイナス市場規模でいうと1,500億円程度となります。
          </p>
        </div>
        </div>
      </section>
    );
};

export default FixCom;
