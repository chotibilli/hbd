import { useState, useEffect } from "react";
import { Sparkles, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const [sparkles, setSparkles] = useState([]);
  const navigate = useNavigate();

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-pink-600 relative overflow-hidden">
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
          onClick={() => navigate("/memories")}
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
}
