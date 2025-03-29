import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setChat([...chat, { text: input, sender: "user" }]);
    setTimeout(() => {
      setChat((prevChat) => [...prevChat, { text: "Thanks for reaching out! We'll get back to you soon.", sender: "bot" }]);
    }, 1000);
    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded-md" required />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" required />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-md" rows="4" required></textarea>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="w-full p-3 bg-blue-500 text-white rounded-md font-semibold">Send Message</motion.button>
        </form>
      </motion.div>

      </div>
  );
};

export default Contact;