import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Header.css';

const Header = ({ scrollToSection }) => {
    const menuRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        const menu = menuRef.current;

        if (isMenuOpen) {
            // メニューを右にスライドして非表示にする
            gsap.to(menu, {
                x: '100%',
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: () => {
                    menu.classList.remove('open');
                }
            });
        } else {
            // メニューを右からスライドして表示する
            gsap.set(menu, { x: '100%', opacity: 0 });
            gsap.to(menu, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut'
            });
            menu.classList.add('open');
        }

        // メニューの開閉状態をトグル
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (section) => {
        scrollToSection(section);
        handleMenuToggle(); // メニューを閉じる
    };

    return (
        <header className="header">
            <div className="menu" ref={menuRef}>
                <div className="menu-items">
                    <button className="menu-button" onClick={() => handleMenuItemClick('Home')}>HOME</button>
                    <button className="menu-button" onClick={() => handleMenuItemClick('OurBusiness')}>SERVICE</button>
                    <button className="menu-button" onClick={() => handleMenuItemClick('Member')}>TEAM</button>
                    <button className="menu-button" onClick={() => handleMenuItemClick('AboutCompaney')}>COMPANY</button>
                </div>
            </div>
            <div className="logo">
                <img src="./Images/logo.svg" alt="svg" className="logosvg" />
            </div>
            <div className="company-name">EPknoT Co., Ltd.</div>
            <button className={`menu-toggle-button ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
                <div className="line top"></div>
                <div className="line middle"></div>
                <div className="line bottom"></div>
            </button>
        </header>
    );
};

export default Header;
