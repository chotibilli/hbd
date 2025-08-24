import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FinalPage() {
  const [hearts, setHearts] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        animationDuration: Math.random() * 5 + 4,
        size: Math.random() * 25 + 25,
      };
      setHearts((prev) => [...prev.slice(-20), newHeart]);
    }, 400);
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

  const loveParagraph = `You are truly everything to me. No matter what life throws my way—whether it's the highs that make me smile or the lows that test me—you've always been my one constant. You give me a sense of stability and peace that I've never known before, and I can't imagine my life without you in it. The strength I carry through every challenge comes from you, from the way you stand by me, and from the love you so effortlessly give. What keeps me moving forward, even on the hardest days, is your smile. It's the light I look for, the comfort I hold onto, and the reminder that no matter what, everything will be okay. You're the cutest, most beautiful girl in the world, but even more than that, you're my safe place, my happiness, and my forever. I don't just want this love for now—I want it for always, for forever, for a lifetime with you. Happy Birthday to the most amazing person I know. I love you more than words can express! ❤️`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-400 to-pink-500 relative overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute pointer-events-none z-20"
          style={{
            left: `${heart.left}%`,
            top: "-60px",
            fontSize: `${heart.size}px`,
            animation: `flutter ${heart.animationDuration}s ease-in infinite`,
          }}
        >
          🎈❤️
        </div>
      ))}

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
        <div className="max-w-4xl mx-auto text-center mb-12 bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-pulse">
            A Message From My Heart 💕
          </h2>
          <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
            {loveParagraph}
          </p>
        </div>

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

        <button
          onClick={() => navigate("/memories")}
          className="mt-10 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
        >
          ← Back to Memories
        </button>
      </div>

      <style>{`
        @keyframes flutter {
          0% { transform: translateY(-60px) translateX(0px) rotate(0deg); opacity: 1; }
          50% { transform: translateY(50vh) translateX(30px) rotate(10deg); opacity: 0.9; }
          100% { transform: translateY(100vh) translateX(-30px) rotate(-10deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
