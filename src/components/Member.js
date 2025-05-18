import React, { useEffect, useState, useRef } from "react";
import "./Member.css";
import { gsap } from 'gsap';

const members = [
  { name: "山本 尚季", position: "CEO/Broker", bio: ["1982. 愛媛県に生まれ、高校、大学を海外で生活", "2006. 南カルフォルニア大学 卒業", "2006. あおぞら銀行入行 シップファイナンスチームに所属", "2009. 株式会社ユニバーシップ 入社", "2012. デロイトトーマツファイナンシャルアドバイザリー合同会社 入社", "2013. 株式会社ユニバーシップ 帰社", "2020. 株式会社EPknoT 設立"], role:"担当業務: 案件ソーシング、案件紹介、ドキュメンテーション、プロジェクトマネジメント", role_description:"海外大学でビジネスを専攻し、ビジネスコミュニケーションに長けています。銀行では、国内船主向け船舶ローン、海外船主向けダイレクトファイナンス、ノンリコース・プロジェクトファイナンス、外資系銀行とのシンジケートローン、コンテナリース（JOLCO）ファイナンスなど、多数の実績を有しております。ファイナンスアドバイザリー業務の経験もあり、金融知識を要する新造船の長期傭船案件やセール・アンド・リースバック（SLB）案件の組成を得意としております。これまでに100隻以上のSLB案件を成約しており、案件組成だけでなく、融資サポートも含めた幅広い業務に取り組んでおります。" },
  { name: "近藤 隆之", position: "COO", bio: ["1984. 愛媛県松山市生まれ", "2008. 成蹊大学 卒業", "2008. 株式会社愛媛銀行 入行", "2022. 株式会社EPknoT 入社"], role:"担当業務： 案件紹介、ドキュメンテーション、クロージング後の案件管理、プロジェクトマネジメント全般", role_description:"銀行業務で培った知識と経験を活かし、セール・アンド・リースバック（SLB）案件の組成およびドキュメンテーション業務を中心に担当しております。" },
  { name: "長竹 麻里", position: "COO", bio: ["      高校、大学を海外で生活", "2005. カナダの大学を卒業", "2005. 経営コンサルティング会社に入社","      （国内外企業に対するコンサルティングサービスや、プロジェクトマネジャーを経験）", "2016. 帰国後、シップブローカー入社", "2022. 株式会社EPknotに入社"], role:"担当業務: 案件紹介資料作成、ドキュメンテーション、クロージング後の案件管理、プロジェクトマネジメント業全般", role_description:"海外生活および経営コンサルタントとしての経験を通じて培った語学力、ビジネスコンサルティングスキル、ドキュメンテーションスキルを強みに契約書類や案件資料の作成等の業務を中心に担当しております。" },
  { name: "濱山 航志郎", position: "Broker", bio: ["1996. 岡山県生まれ", "2018. 日本体育大学 卒業", "2018. 大学を卒業後2年間アメリカへ留学", "2021. 帰国後、株式会社EPknoT入社"], role:"担当業務： 案件ソーシング、案件紹介、ドキュメンテーション", role_description:"海外生活で培った語学力を活かし、セールスアンドリースバック（SLB）案件の組成及びドキュメンテーション業務を中心に行っております。" },
  { name: "田崎 昌彦", position: "Broker/Project", bio: ["1981. 長野県に生まれ高校、大学を海外で生活", "2007. ニューヨーク大学 修士課程 修了", "2007. NYにて複数の画廊に所属し、アートディーラーとして活動", "2024. 株式会社三越伊勢丹 入社", "2023. 株式会社 EPknoT 入社"], role:"担当業務： 傭船運航支援、案件紹介資料作成、ドキュメンテーション、営業アシスタント", role_description:"長期の海外生活で培った語学力を活かし、傭船運航支援や営業アシスタント業務など、傭船運航支援、営業アシスタント業務など、実務全般に幅広く従事しております。" },
  { name: "立野 利奈", position: "Assistant", bio: ["1995. 広島県生まれ", "2018. 学習院女子大学 卒業", "2018. EY Japan 入社", "2021. 株式会社 EPknoT 入社"], role:"担当業務： 総務全般、営業アシスタント", role_description:"大学在学中に埼玉県親善大使として1年間アメリカへ留学し音楽学を専攻する等、国際交流た経験と高いコミュニケーション能力を強みに、インボイス管理をはじめとする営業アシスタント業務を中心に担当しております。" },
  { name: "梶原 浩平", position: "CFO", bio: ["1986. 愛媛県松山市生まれ", "2013. 松山大学 修士課程 卒業", "2013. 越智会計事務所 入社", "2023. 株式会社EPknoT 入社"], role:"担当業務： 経理事務・総務業務、クロージング後の案件管理、船価鑑定、船舶事務管理相談", role_description:"会計・税務分野で培った知識と経験を活かし、社内管理業務、ドキュメンテーション業務および案件関連の事務処理を担当しております。" },
  { name: "森 智津江", position: "Accounting",bio: [""], role:"", role_description:"" },
  { name: "熊澤 亜貴子", position: "Accounting",bio: [""], role:"", role_description:""},
  { name: "山本惠三", position: "Advisor", bio: ["1957. 愛媛県八幡浜市生まれ", "1979. 亜細亜大学 卒業", "1979. 愛媛銀行 入行", "2012. 愛媛銀行 取締役就任", "2018. 愛媛銀行 代表取締役 副頭取就任", "2021. 愛媛銀行 取締役退任", "2022. 愛媛県済生会 監事就任", "2023. 株式会社EPknoT入社"], role:"担当業務： 経営相談、銀行折衝", role_description:"銀行時代のマネジメント経験と組織運営の知見や経験を強みに、組織ガバナンスの構築や組織マネジメントに関する経営的支援業務に取り組んでおります。" },
  { name: "下村浩二", position: "Advisor", bio: ["1964. 山口県下松市生まれ", "1987. 立命館大学 卒業", "1987. 山口銀行 入行", "2022. 株式会社EPknoT 入社"], role:"担当業務： 経営相談、銀行折衝", role_description:"銀行の船舶専門部署や交渉経験を強みに、船舶案件の精査や金融機関との交渉・調整業務に取り組んでおります。" },
] 

const Member = () => {
  const [expanded, setExpanded] = useState(false);
  const moreMembersRef = useRef(null);
  const sectionRef = useRef(null);

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


  const handleShowMore = () => {
    setExpanded(true);
    moreMembersRef.current.style.display = "block";
  };

  const handleHide = () => {
    moreMembersRef.current.style.display = "none";
    setExpanded(false);
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="member-section" ref={sectionRef}>
      <h1 ref={h1Ref} className="team-title">TEAM</h1>
      <p ref={pRef}className="team-description">
      EPknoTでは、多様なバックグラウンドを持ち、船舶およびファイナンスに関する豊富な知識と経験を備えたプロフェッショナルが活躍しています。
      </p>

      <div className="member-list">
        {members.slice(0, 2).map((member, index) => (
          <div key={index} className="member-card">
            <h2>{member.name}</h2>
            <h3>{member.position}</h3>
            <ul className="bio-list">
              {member.bio.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p>{member.role}</p>
            <p>{member.role_description}</p>
          </div>
        ))}
      </div>

      {!expanded && (
        <div className="show-more-text" onClick={handleShowMore}>
          Show More
          <span className="arrow">↓</span>
        </div>
      )}

      <div ref={moreMembersRef} className="more-members">
        {expanded && members.slice(2).map((member, index) => (
          <div key={index} className="member-card">
            <h2>{member.name}</h2>
            <h3>{member.position}</h3>
            <ul className="bio-list">
              {member.bio.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p>{member.role}</p>
            <p>{member.role_description}</p>
          </div>
        ))}
        {expanded && (
          <div className="hide-text" onClick={handleHide}>
            <span className="arrow">↑</span>
            Hide
          </div>
        )}
      </div>
    </div>
  );
};

export default Member;