import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Header.css';

const Header = ({ scrollToSection }) => {
    const menuRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        const menu = menuRef.current;

        if (isMenuOpen) {
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
            gsap.set(menu, { x: '100%', opacity: 0 });
            gsap.to(menu, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut'
            });
            menu.classList.add('open');
        }

        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (section) => {
        scrollToSection(section);
        if (window.innerWidth <= 768) {
            handleMenuToggle();
        }
    };

    return (
        <header className="header">
            <div className="logo">
                <img src="./Images/logo.svg" alt="Logo" className="logosvg" />
            </div>

            {/* デスクトップ用メニュー */}
            <div className="menu-items desktop-menu">
                <button className="menu-button" onClick={() => handleMenuItemClick('Home')}>HOME</button>
                <button className="menu-button" onClick={() => handleMenuItemClick('OurBusiness')}>SERVICE</button>
                <button className="menu-button" onClick={() => handleMenuItemClick('Member')}>TEAM</button>
                <button className="menu-button" onClick={() => handleMenuItemClick('AboutCompaney')}>COMPANY</button>
            </div>

            {/* モバイル用メニュー */}
            <div className="menu mobile-menu" ref={menuRef}>
                <div className="menu-items">
                    <button className="menu-button" onClick={() => handleMenuItemClick('Home')}>HOME</button>
                    <button className="menu-button" onClick={() => handleMenuItemClick('OurBusiness')}>SERVICE</button>
                    <button className="menu-button" onClick={() => handleMenuItemClick('Member')}>TEAM</button>
                    <button className="menu-button" onClick={() => handleMenuItemClick('AboutCompaney')}>COMPANY</button>
                </div>
            </div>

            {/* モバイル用トグルボタン */}
            <button className={`menu-toggle-button mobile-menu ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
                <div className="line top"></div>
                <div className="line middle"></div>
                <div className="line bottom"></div>
            </button>
        </header>
    );
};

export default Header;
