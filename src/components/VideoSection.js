import React, { useEffect, useRef, useState } from 'react';
import './VideoSection.css';

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(videoRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`video-section ${isVisible ? 'visible' : ''}`}
      ref={videoRef}
    >
      <video
        src="./Videos/VideoSectionResource.mp4"
        className="video-content"
        autoPlay
        muted
        loop
      />
    </section>
  );
};

export default VideoSection;

