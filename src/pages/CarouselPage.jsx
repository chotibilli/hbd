import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import photo1 from "../assets/images/photo1.JPG";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import photo6 from "../assets/images/photo6.jpg";
import photo7 from "../assets/images/photo7.jpg";
import photo8 from "../assets/images/photo8.jpg";

export default function CarouselPage() {
  const [rotation, setRotation] = useState(0);
  const [sparkles, setSparkles] = useState([]);
  const navigate = useNavigate();

  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.3);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle = {
        id: Math.random(),
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDuration: Math.random() * 2 + 1,
      };
      setSparkles((prev) => [...prev.slice(-15), newSparkle]);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-400 relative overflow-hidden p-4">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute text-yellow-200 animate-pulse"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDuration: `${sparkle.animationDuration}s`,
          }}
        >
          <Sparkles size={12} />
        </div>
      ))}

      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-bounce">
          Our Beautiful Memories 💖
        </h2>
        <p className="text-white/90 text-xl">
          Spinning through our favorite moments together
        </p>
      </div>

      <div
        className="relative w-96 h-96 md:w-[600px] md:h-[600px] mb-12"
        style={{ perspective: "1200px" }}
      >
        <div
          className="absolute inset-0 transform-gpu"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg)`,
          }}
        >
          {photos.map((photo, index) => {
            const angle = (index * 360) / photos.length;
            const radius = 220;
            return (
              <div
                key={index}
                className="absolute w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 transition-all duration-500"
                style={{
                  transform: `
                    rotateY(${angle}deg) 
                    translateZ(${radius}px)
                    rotateY(${-angle}deg)
                  `,
                  left: "50%",
                  top: "50%",
                  marginLeft: "-80px",
                  marginTop: "-80px",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={photo}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => navigate("/message")}
        className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-10 py-3 rounded-full text-lg font-bold shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50"
      >
        Continue the Love Story →
      </button>
    </div>
  );
}
