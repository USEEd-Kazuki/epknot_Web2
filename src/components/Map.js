import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Map.css";

gsap.registerPlugin(ScrollTrigger);

const containerStyle = {
  width: "100%",
  height: "800px",
  borderRadius: "20px", // 角を丸くする
  overflow: "hidden",
};

const center = {
  lat: 35.669727, // 銀座の座標
  lng: 139.758663,
};

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // GSAP アニメーション: ブロック状の表示
    gsap.fromTo(
      mapRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
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
            {/* マーカーの追加 */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

export default Map;
