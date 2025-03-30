import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Photo.css";

const Photo = () => {
  const photoRow1 = useRef(null);
  const textRow = useRef(null);
  const photoRow2 = useRef(null);

  useEffect(() => {
    const cloneImages = (container) => {
      const children = [...container.children];
      children.forEach((child) => {
        container.appendChild(child.cloneNode(true));
      });
    };

    cloneImages(photoRow1.current);
    cloneImages(photoRow2.current);

    gsap.fromTo(
      photoRow1.current,
      { x: `-${photoRow1.current.scrollWidth / 2}px` },
      { x: "0%", duration: 30, repeat: -1, ease: "linear" }
    );

    gsap.fromTo(
      textRow.current,
      { x: "0%" },
      { x: "-100%", duration: 30, repeat: -1, ease: "linear" }
    );

    gsap.fromTo(
      photoRow2.current,
      { x: `-${photoRow2.current.scrollWidth / 2}px` },
      { x: "0%", duration: 30, repeat: -1, ease: "linear" }
    );

    // 文字にグラデーションアニメーションを適用
    const textElements = textRow.current.querySelectorAll("span");
    textElements.forEach((element, index) => {
      gsap.to(element, {
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "linear",
        color: gsap.utils.wrap(["#A30863", "#A30863", "#A38B63"]), // 赤、緑、青に色を変える
        delay: index * 0.01, // 各文字に少しずつ遅延を与える
      });
    });
  }, []);

  // "EPknoT Co., Ltd." を6回繰り返して、それぞれを1文字ずつ分割
  const repeatedText = "EPknoT Co., Ltd. ".repeat(6).split("").map((char, index) => (
    <span key={index} style={{ marginRight: char === " " ? "20px" : "0" }}>
      {char}
    </span>
  ));

  return (
    <div className="scroll-container">
      <div ref={photoRow1} className="photo-row">
        <img src="./Images/Photo1.jpg" alt="photo1" className="photo" />
        <img src="./Images/Photo1.jpg" alt="photo2" className="photo" />
        <img src="./Images/Photo1.jpg" alt="photo3" className="photo" />
        <img src="./Images/Photo1.jpg" alt="photo4" className="photo" />
      </div>

      <div ref={textRow} className="text-row">
        {repeatedText}
      </div>

      <div ref={photoRow2} className="photo-row">
        <img src="./Images/Photo1.jpg" alt="photo5" className="photo" />
        <img src="./Images/Photo1.jpg" alt="photo6" className="photo" />
        <img src="./Images/Photo1.jpg" alt="photo7" className="photo" />
        <img src="./Images/Photo1.jpg" alt="photo8" className="photo" />
      </div>
    </div>
  );
};

export default Photo;
