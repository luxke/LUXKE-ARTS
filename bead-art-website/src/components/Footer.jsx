import { Instagram, Mail, Phone, MapPin} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-4">
        
      <div className="flex items-center space-x-2">
  <MapPin size={20} className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
  <a
    href="https://maps.app.goo.gl/igLEsbAhEx4MAN2AA"
    target="_blank"
    rel="noopener noreferrer"
    className="italic text-sm text-gray-600 hover:text-blue-500 transition-colors duration-300 group"
  >
    Located at Ushirika Road
  </a>
</div>
<br/>
        <div className="flex items-center space-x-2">
          <Phone size={20} />
          <p className="text-sm">Call: 0740-723-526</p>
        </div>

        <div className="flex items-center space-x-2">
          <Mail size={20} />
          <p className="italic text-sm">Email: fkipkemboi40@gmail.com</p>
        </div>

        <div className="flex space-x-4">
          <a href="https://wa.me/message/6FSEOO4BXXLQP1" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={20} className="text-green-500 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/l.u.x.k.e?igsh=aXZhM2ZocGZyOTdx" target="_blank" rel="noopener noreferrer"><Instagram size={20} className="text-pink-500 cursor-pointer" />
          </a>
        </div>
      </div>

      <div className="text-center text-sm mt-4">
        <p>© 2025 Luxke Arts - Created by Luxke Companies</p>
        <p className="mt-2">
          <a href="#" className="underline">Privacy Policy</a> | 
          <a href="#" className="underline ml-2">Terms and Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
