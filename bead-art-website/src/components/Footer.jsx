import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-4">
        
        <div className="flex items-center space-x-2">
          <MapPin size={20} />
          <p className="italic text-sm">
            Located at Ushirika Road, <br /> P.O Box 20243
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Phone size={20} />
          <p className="text-sm">Call: 0234-5665</p>
        </div>

        <div className="flex items-center space-x-2">
          <Mail size={20} />
          <p className="italic text-sm">Email: kyekumba@gmail.com</p>
        </div>

        <div className="flex space-x-4">
          <Facebook size={20} className="text-blue-600 cursor-pointer" />
          <Instagram size={20} className="text-pink-500 cursor-pointer" />
          <Twitter size={20} className="cursor-pointer" />
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
