import React, { useState, useEffect } from "react";
import { Heart, Sparkles, Gift } from "lucide-react";

// Import your photos from assets folder
import photo1 from "./assets/images/photo1.jpg";
import photo2 from "./assets/images/photo2.jpg";
import photo3 from "./assets/images/photo3.jpg";
import photo4 from "./assets/images/photo4.jpg";
import photo5 from "./assets/images/photo5.jpg";
import photo6 from "./assets/images/photo6.jpg";
import photo7 from "./assets/images/photo7.jpg";
import photo8 from "./assets/images/photo8.jpg";

const BirthdayWishPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [hearts, setHearts] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [rotation, setRotation] = useState(0);

  // Your imported photos array
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

  // Continuous rotation animation - slower speed
  useEffect(() => {
    if (currentPage === 1) {
      const interval = setInterval(() => {
        setRotation((prev) => prev + 0.3); // Decreased from 1.5 to 0.3 for slower rotation
      }, 60); // Increased from 30ms to 60ms for slower, smoother animation
      return () => clearInterval(interval);
    }
  }, [currentPage]);

  // Generate falling hearts animation
  useEffect(() => {
    if (currentPage === 2) {
      const interval = setInterval(() => {
        const newHeart = {
          id: Math.random(),
          left: Math.random() * 100,
          animationDuration: Math.random() * 3 + 2,
          size: Math.random() * 20 + 15,
        };
        setHearts((prev) => [...prev.slice(-20), newHeart]);
      }, 300);
      return () => clearInterval(interval);
    }
  }, [currentPage]);

  // Generate sparkles animation
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

  const loveParagraph = `You are truly everything to me. No matter what life throws my way—whether it's the highs that make me smile or the lows that test me—you've always been my one constant. You give me a sense of stability and peace that I've never known before, and I can't imagine my life without you in it. The strength I carry through every challenge comes from you, from the way you stand by me, and from the love you so effortlessly give. What keeps me moving forward, even on the hardest days, is your smile. It's the light I look for, the comfort I hold onto, and the reminder that no matter what, everything will be okay. You're the cutest, most beautiful girl in the world, but even more than that, you're my safe place, my happiness, and my forever. I don't just want this love for now—I want it for always, for forever, for a lifetime with you. Happy Birthday to the most amazing person I know. I love you more than words can express! ❤️`;

  const StartPage = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-pink-600 relative overflow-hidden">
      {/* Background sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute text-yellow-300 animate-ping"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDuration: `${sparkle.animationDuration}s`,
          }}
        >
          <Sparkles size={16} />
        </div>
      ))}

      <div className="text-center p-8 bg-white/20 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 max-w-2xl mx-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent mb-4 animate-pulse">
            Happiest
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent mb-4 animate-bounce">
            Birthday
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-pulse">
            My Babygirl! 💕
          </h2>
        </div>

        <button
          onClick={() => setCurrentPage(1)}
          className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/50"
        >
          <span className="flex items-center justify-center gap-3">
            Click for Surprise!
            <Gift
              className="transform transition-transform duration-300 group-hover:scale-110"
              size={24}
            />
          </span>
        </button>
      </div>
    </div>
  );

  const CarouselPage = () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-400 relative overflow-hidden p-4">
      {/* Background sparkles */}
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

      {/* 3D Circular Carousel */}
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
            const radius = 220; // Increased distance from center

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
                  marginLeft: "-80px", // Adjusted for larger size
                  marginTop: "-80px", // Adjusted for larger size
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
        onClick={() => {
          console.log("Button clicked, current page:", currentPage);
          setCurrentPage(2);
        }}
        className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-10 py-3 rounded-full text-lg font-bold shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50"
      >
        Continue the Love Story →
      </button>
    </div>
  );

  const FinalPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-400 to-pink-500 relative overflow-hidden">
      {/* Falling hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-red-400 pointer-events-none z-20"
          style={{
            left: `${heart.left}%`,
            top: "-50px",
            fontSize: `${heart.size}px`,
            animation: `fall ${heart.animationDuration}s linear infinite`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* Floating sparkles */}
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
          ✨
        </div>
      ))}

      <div className="container mx-auto px-4 py-8 flex flex-col items-center relative z-10">
        {/* Love message */}
        <div className="max-w-4xl mx-auto text-center mb-12 bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-pulse">
            A Message From My Heart 💕
          </h2>
          <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
            {loveParagraph}
          </p>
        </div>

        {/* Birthday cake */}
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <div className="text-8xl md:text-9xl animate-bounce">🎂</div>
            <div
              className="absolute -top-4 -right-4 animate-spin"
              style={{ animationDuration: "3s" }}
            >
              <div className="text-4xl">✨</div>
            </div>
            <div
              className="absolute -top-4 -left-4 animate-spin"
              style={{ animationDuration: "4s" }}
            >
              <div className="text-3xl">🎈</div>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-pulse">
              <div className="text-2xl">🕯️</div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-200 via-white to-yellow-200 bg-clip-text text-transparent mb-4 animate-pulse">
            Happiest Birthday
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white animate-bounce">
            My Loveee! 💖✨
          </h2>
        </div>
      </div>

      <style>{`
        @keyframes fall {
          from {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
          }
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );

  const pages = [<StartPage />, <CarouselPage />, <FinalPage />];

  return <div className="w-full">{pages[currentPage]}</div>;
};

export default BirthdayWishPage;
