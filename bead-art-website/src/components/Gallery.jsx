import { useState } from "react";
import { motion } from "framer-motion";
import Bead1 from "./image/BEAD 1.jpg";
import Bead2 from "./image/BEAD 2.jpg";
import Bead3 from "./image/BEAD 3.jpg";
import Bead4 from "./image/BEAD 4.jpg";
import Bead5 from "./image/BEAD 5.jpg";
import Bead6 from "./image/BEAD 6.jpg";
import Bead7 from "./image/BEAD 7.jpg";
import Bead8 from "./image/BEAD 8.jpg";
import Bead9 from "./image/BEAD 9.jpg";
import Bead10 from "./image/BEAD 10.jpg";
import Bead11 from "./image/BEAD 11.jpg";
import Bead12 from "./image/BEAD 12.jpg";

const images = [
  { id: 1, src: Bead1, category: "Bracelets", price: "Ksh 350" },
  { id: 2, src: Bead2, category: "Bracelets", price: "Ksh 400" },
  { id: 3, src: Bead3, category: "Bracelets", price: "Ksh 300" },
  { id: 4, src: Bead4, category: "Bracelets", price: "Ksh 450" },
  { id: 5, src: Bead5, category: "Bracelets", price: "Ksh 370" },
  { id: 6, src: Bead6, category: "Bracelets", price: "Ksh 390" },
  { id: 7, src: Bead7, category: "Bracelets", price: "Ksh 360" },
  { id: 8, src: Bead8, category: "Bracelets", price: "Ksh 340" },
  { id: 9, src: Bead9, category: "Bracelets", price: "Ksh 410" },
  { id: 10, src: Bead10, category: "Bracelets", price: "Ksh 380" },
  { id: 11, src: Bead11, category: "Bracelets", price: "Ksh 390" },
  { id: 12, src: Bead12, category: "Bracelets", price: "Ksh 420" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Bead Art Gallery</h1>

      <div className="flex justify-center space-x-4 mb-6">
        {["All", "Bracelets", "Anklets", "Waist Beads"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg font-medium ${filter === category ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-lg shadow-md overflow-hidden relative cursor-pointer"
            onClick={() => setSelectedImage(image.src)}
          >
            <motion.img
              src={image.src}
              alt="Bead Art"
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <div className="p-2 bg-gray-100 text-center">
              <p className="text-gray-700 font-semibold">{image.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" onClick={() => setSelectedImage(null)}>
          <motion.img 
            src={selectedImage} 
            alt="Enlarged Art"
            className="w-3/4 max-w-lg rounded-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
