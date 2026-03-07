import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import NavBar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<LandingPage />} />
        <Route path="/contact" element={<LandingPage />} />
        <Route path="/projects" element={<LandingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
