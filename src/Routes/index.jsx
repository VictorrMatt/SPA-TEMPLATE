import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import History from "../Pages/History";
import Contact from "../Pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="history" element={<History />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
