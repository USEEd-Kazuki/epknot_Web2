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

  useEffect(() => {
    if (isVisible && videoRef.current) {
      // Attempt to play the video programmatically (iOS fix)
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Video play failed:', error);
        });
      }
    }
  }, [isVisible]);

  return (
    <section
      className={`video-section ${isVisible ? 'visible' : ''}`}
    >
      <video
        ref={videoRef}
        src="/Videos/VideoSectionResource.mp4" // public/Videos に置く
        className="video-content"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </section>
  );
};

export default VideoSection;
