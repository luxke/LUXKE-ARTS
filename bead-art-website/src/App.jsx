import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer"

export default function App() {
  return (
    <>

    <Navbar />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/gallery" element={<Gallery />} />
     <Route path="/AboutPage" element=   {<AboutPage />} />
     <Route path="/contact" element={<Contact />} />
   </Routes>
  
      <Footer/>
    </>
  );
}
