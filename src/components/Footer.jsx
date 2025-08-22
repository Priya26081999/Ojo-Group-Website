import { Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-center md:text-left">
        
       
        <div>
          <h2 className="text-2xl font-bold mb-3">Ojo Groups</h2>
          <p className="text-gray-400 text-medium">
            Building solutions across technology, finance, agro, and more.
          </p>
        </div>

        
        <div className="mx-20">
          <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-gray-300 text-medium">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={18} className="text-pink-400" /> Tamilnadu, India
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={18} className="text-blue-400" /> +91 99449 67320
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={18} className="text-red-400" /> info@ojogroups.com
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center md:justify-end">
          <p className="text-gray-400 text-sm">
          &copy; 2025 Ojo Groups. All Rights Reserved.</p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
