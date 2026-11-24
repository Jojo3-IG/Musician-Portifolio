import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Music from "./Pages/Music";
import Gigs from "./Pages/Gigs";
import Booking from "./Pages/Booking";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/gigs" element={<Gigs />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
}

