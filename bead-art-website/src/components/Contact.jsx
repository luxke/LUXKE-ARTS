import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    // sending messages through console
    console.log("Message Sent:", { name, email, message });
    
    setIsSubmitted(true);
//this is to reset the fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-6 bg-white rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-md"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md font-semibold"
          >
            Send Message
          </motion.button>
        </form>

        {isSubmitted && (
          <div className="mt-4 text-green-500">Thank you! We’ll get back to you soon.</div>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
