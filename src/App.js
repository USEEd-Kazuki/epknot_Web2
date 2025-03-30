import React, { useRef } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import MainMessage from './components/MainMessage';
import VideoSection from './components/VideoSection';
import Slogan from './components/Slogan';
import OurBusiness from './components/OurBusiness';
import Member from './components/Member';
import Photo from './components/Photo';
import AboutCompaney from './components/AboutCompaney';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  // 各セクションのrefを作成
  const sections = {
    Home: useRef(null),
    MainMessage: useRef(null),
    VideoSection: useRef(null),
    Slogan: useRef(null),
    OurBusiness: useRef(null),
    Member: useRef(null),
    Photo: useRef(null),
    AboutCompaney: useRef(null),
    Map: useRef(null),
  };

  // セクションにスクロールする関数
  const scrollToSection = (sectionName) => {
    const sectionRef = sections[sectionName];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Header に scrollToSection を渡す */}
      <Header scrollToSection={scrollToSection} />

      {/* 各セクションに ref を渡す */}
      <div ref={sections.Home}><Hero /></div>
      <div ref={sections.MainMessage}><MainMessage /></div>
      <div ref={sections.VideoSection}><VideoSection /></div>
      <div ref={sections.Slogan}><Slogan /></div>
      <div ref={sections.OurBusiness}><OurBusiness /></div>
      <div ref={sections.Member}><Member /></div>
      <div ref={sections.Photo}><Photo /></div>
      <div ref={sections.AboutCompaney}><AboutCompaney /></div>
      <div ref={sections.Map}><Map /></div>
      
      <Footer />
    </div>
  );
}

export default App;
