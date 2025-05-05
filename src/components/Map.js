import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Map.css";

gsap.registerPlugin(ScrollTrigger);

// マップコンテナのスタイル
const containerStyle = {
  width: "100%",
  height: "800px",
  borderRadius: "20px",
  overflow: "hidden",
};

// 〒107-0052 東京都港区赤坂2丁目11-2 NOIR赤坂ビルディングの緯度経度
const center = {
  lat: 35.6702001,
  lng: 139.7412232,
};

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile && mapRef.current) {
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
      mapRef.current.style.opacity = "1";
      mapRef.current.style.transform = "scale(1)";
    }

    ScrollTrigger.refresh();
  }, []);

  // マーカーをクリックしたらGoogleマップで開く
  const handleMarkerClick = () => {
    const mapUrl =
      "https://www.google.com/maps/search/?api=1&query=35.671939,139.737953";
    window.open(mapUrl, "_blank");
  };

  return (
    <section className="map-section">
      <div className="map-block" ref={mapRef}>
        <LoadScript googleMapsApiKey="AIzaSyB2d4Yy8x23w6yIuicmTxYakTaKJmBnuEI">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
          >
            <Marker position={center} onClick={handleMarkerClick} />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

export default Map;
