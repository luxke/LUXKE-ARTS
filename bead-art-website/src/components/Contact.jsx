import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser"; 

const Contact = () => {
  const formRef = useRef(); 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sanitizeInput = (input) => {
    return input.replace(/(\r|\n|%0A|%0D)/gi, '').trim();
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanName = sanitizeInput(name);
    const cleanEmail = sanitizeInput(email);
    const cleanMessage = sanitizeInput(message);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      alert("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    const formData = {
      from_name: cleanName,
      from_email: cleanEmail,
      message: cleanMessage,
    };

    emailjs.send(
      "service_h4a8c41", 
      "template_taklfol",
      formData,
      "SPYFYxAuicY9m20O7"
    )
    .then(
      (result) => {
        console.log("Message Sent:", result.text);
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.error("Failed to send message:", error.text);
        alert("Failed to send message. Please try again later.");
      }
    );
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
        
        <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
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
