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
  
     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-500"> 
          LUXKE Bead Art Website 🚀
        </h1>
        <p className="text-gray-700 mt-4">
          Handcrafted bead art collections just for you!
        </p>
      </div> 
      <Footer/>
    </>
  );
}
