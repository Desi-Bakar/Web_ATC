import React, { useEffect, useState } from "react";

const images = [
  "/img/DESIGNN.png", // Ganti dengan path gambar kamu
  "/img/DESIGNN1.png",
  "/img/aretanet.png",
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Ganti ke 10000 untuk 10 detik
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          style={{
            display: index === current ? "block" : "none",
            width: "1336px",
            height: "445px",
            maxHeight: "445px",
            objectFit: "cover",
          }}
        />
      ))}

      {/* Tombol navigasi */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        ›
      </button>
    </div>
  );
};

export default HeroCarousel;
