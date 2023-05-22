import "./App.css";
import Navbar from "./NavBar";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Experience from "./pages/Experience";
import Teaching from "./pages/Teaching";
import Awards from "./pages/Awards";
// import Publication from "./pages/Publication";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/award" element={<Awards />} />
        {/* <Route path="/publication" element={<Publication />} /> */}
      </Routes>
    </>
  );
}

export default App;
