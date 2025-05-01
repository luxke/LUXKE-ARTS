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
import Bead13 from "./image/BEAD 13.jpg";
import Bead14 from "./image/BEAD 14.jpg";
import Bead15 from "./image/BEAD 15.jpg";
import Bead16 from "./image/BEAD 16.jpg";
import Bead17 from "./image/BEAD 17.jpg";
import Bead18 from "./image/BEAD 18.jpg";
import Bead19 from "./image/BEAD 19.jpg";
import Bead20 from "./image/BEAD 20.jpg";
import Bead21 from "./image/BEAD 21.jpg";
import Bead22 from "./image/BEAD 22.jpg";
import Bead23 from "./image/BEAD 23.jpg";
import Bead24 from "./image/BEAD 24.jpg";
import Bead25 from "./image/BEAD 25.jpg";
import Bead26 from "./image/BEAD 26.jpg";
import Bead27 from "./image/BEAD 27.jpg";
import Bead28 from "./image/BEAD 28.jpg";
import Bead29 from "./image/BEAD 29.jpg";
import Bead30 from "./image/BEAD 30.jpg";
import Bead31 from "./image/BEAD 31.jpg";
import Bead32 from "./image/BEAD 32.jpg";
import Bead33 from "./image/BEAD 33.jpg";
import Bead34 from "./image/BEAD 34.jpg";
import Bead35 from "./image/BEAD 35.jpg";

const images = [
  { id: 1, src: Bead1, category: "Bracelets", price: "Ksh. 300" },
  { id: 2, src: Bead2, category: "Bracelets", price: "Ksh. 300" },
  { id: 3, src: Bead3, category: "Bracelets", price: "Ksh. 300" },
  { id: 4, src: Bead4, category: "Bracelets", price: "Ksh. 300" },
  { id: 5, src: Bead5, category: "Bracelets", price: "Ksh. 300" },
  { id: 6, src: Bead6, category: "Bracelets", price: "Ksh. 300" },
  { id: 7, src: Bead7, category: "Bracelets", price: "Ksh. 300" },
  { id: 8, src: Bead8, category: "Bracelets", price: "Ksh. 300" },
  { id: 9, src: Bead9, category: "Bracelets", price: "Ksh. 300" },
  { id: 10, src: Bead10, category: "Bracelets", price: "Ksh. 300" },
  { id: 11, src: Bead11, category: "Bracelets", price: "Ksh. 300" },
  { id: 12, src: Bead12, category: "Bracelets", price: "Ksh. 300" },
  { id: 13, src: Bead13, category: "Waist Beads", price: "Ksh. 200" },
  { id: 14, src: Bead14, category: "Waist Beads", price: "Ksh. 500" },
  { id: 15, src: Bead15, category: "Waist Beads", price: "Ksh. 300" },
  { id: 16, src: Bead16, category: "Waist Beads", price: "Ksh. 150" },
  { id: 17, src: Bead17, category: "Waist Beads", price: "Ksh. 500" },
  { id: 18, src: Bead18, category: "Waist Beads", price: "Ksh. 500" },
  { id: 19, src: Bead19, category: "Waist Beads", price: "Ksh. 200" },
  { id: 20, src: Bead20, category: "Waist Beads", price: "Ksh. 200" },
  { id: 21, src: Bead21, category: "Waist Beads", price: "Ksh. 200" },
  { id: 22, src: Bead22, category: "Waist Beads", price: "Ksh. 150" },
  { id: 23, src: Bead23, category: "Anklets", price: "Ksh. 100" },
  { id: 24, src: Bead24, category: "Anklets", price: "Ksh. 100" },
  { id: 25, src: Bead25, category: "Anklets", price: "Ksh. 100" },
  { id: 26, src: Bead26, category: "Anklets", price: "Ksh. 100" },
  { id: 27, src: Bead27, category: "Fixed Bracelet", price: "Ksh. 200" },
  { id: 28, src: Bead28, category: "Fixed Bracelet", price: "Ksh. 200" },
  { id: 29, src: Bead29, category: "Fixed Bracelet", price: "Ksh. 200" },
  { id: 30, src: Bead30, category: "Fixed Bracelet", price: "Ksh. 200" },
  { id: 31, src: Bead31, category: "Fixed Bracelet", price: "Ksh. 200" },
  { id: 32, src: Bead32, category: "Fixed Bracelet", price: "Ksh. 200" },
  { id: 33, src: Bead33, category: "Fixed Bracelet", price: "Ksh. 200" },
  { id: 34, src: Bead34, category: "Fixed Bracelet", price: "Ksh. 200" },
  { id: 35, src: Bead35, category: "Fixed Bracelet", price: "Ksh. 200" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Bead Art Gallery</h1>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
  {["All", "Bracelets", "Anklets", "Waist Beads", "Fixed Bracelet"].map((category) => (
    <button
      key={category}
      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
        filter === category ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
      }`}
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
