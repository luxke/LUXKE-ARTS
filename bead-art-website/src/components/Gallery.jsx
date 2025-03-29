import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  { id: 1, src: "/art1.jpg", category: "Anklets" },
  { id: 2, src: "/art2.jpg", category: "Bracelets" },
  { id: 3, src: "/art3.jpg", category: "Waist Beads" },
  { id: 4, src: "/art4.jpg", category: "Anklets" },
  { id: 5, src: "/art5.jpg", category: "Bracelets" },
];

const Gallery= () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Bead Art Gallery</h1>

      {/* Filter Buttons */}
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

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image) => (
          <motion.img
            key={image.id}
            src={image.src}
            alt="Bead Art"
            className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image.src)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
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