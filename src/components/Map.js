import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Map.css";

gsap.registerPlugin(ScrollTrigger);

const containerStyle = {
  width: "100%",
  height: "800px",
  borderRadius: "20px",
  overflow: "hidden",
};

const center = {
  lat: 35.669727,
  lng: 139.758663,
};

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile && mapRef.current) {
      // PCのみアニメーション
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    } else if (mapRef.current) {
      // モバイル：CSS無視して即時表示
      mapRef.current.style.opacity = "1";
      mapRef.current.style.transform = "scale(1)";
    }

    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="map-section">
      <div className="map-block" ref={mapRef}>
        <LoadScript googleMapsApiKey="AIzaSyB2d4Yy8x23w6yIuicmTxYakTaKJmBnuEI">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

export default Map;

