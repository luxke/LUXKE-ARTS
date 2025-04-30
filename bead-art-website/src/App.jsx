import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer"
import Privacy from "./components/pages/privacy";
import Terms from "./components/pages/Terms";

export default function App() {
  return (
    <>

    <Navbar />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/gallery" element={<Gallery />} />
     <Route path="/AboutPage" element=   {<AboutPage />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/privacy" element={<Privacy />} />
     <Route path="/Terms" element={<Terms />} />
   </Routes>
  
      <Footer/>
    </>
  );
}
