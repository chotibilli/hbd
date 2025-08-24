import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import CarouselPage from "./pages/CarouselPage";
import FinalPage from "./pages/FinalPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/memories" element={<CarouselPage />} />
        <Route path="/message" element={<FinalPage />} />
      </Routes>
    </Router>
  );
}
