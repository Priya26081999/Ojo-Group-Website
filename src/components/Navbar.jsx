import  { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react"; 

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-sm">
      <div className="bg-gray-300 text-sm px-4 py-2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
        <div className="font-bold text-red-600 text-4xl mx-2 my-5 p-2">Ojo Groups</div>
        <div className="flex flex-wrap gap-5 text-gray-800 font-bold text-lg">
          <span className="flex  items-center  gap-1">
            <MapPin size={30} className="text-pink-400"/> Tamilnadu, India
          </span>
          <span className="flex items-center gap-1">
            <Phone size={30} className="text-blue-600 fill-cyan-600"/> 9944967320
          </span>
          <span className="flex items-center gap-1">
            <Mail size={30} className="text-red-500"/> info@ojogroups.com
          </span>
        </div>
      </div>

      <nav className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-3 py-8 flex items-center justify-between">
          <ul className="hidden lg:flex gap-7 font-medium">
            <li><Link to="/" className="hover:text-gray-600 transition duration-200">Home</Link></li>
            <li><Link to="/technology" className="hover:text-gray-600 transition duration-200">Technology Solutions</Link></li>
            <li><Link to="/agro" className="hover:text-gray-600 transition duration-200">Agro &amp; Farming</Link></li>
            <li><Link to="/finance" className="hover:text-gray-600 transition duration-200">Financial Services</Link></li>
            <li><Link to="/real-estate" className="hover:text-gray-600 transition duration-200">Real Estate</Link></li>
            <li><Link to="/media" className="hover:text-gray-600 transition duration-200">Media &amp; PR</Link></li>
            <li><Link to="/academy" className="hover:text-gray-600 transition duration-200">Education &amp; Training</Link></li>
            <li><Link to="/growth" className="hover:text-gray-600 transition duration-200">Business Growth</Link></li>
            <li><Link to="/digital" className="hover:text-gray-600 transition duration-200">Digital Marketing</Link></li>
          </ul>

         
          <button
            className="lg:hidden ml-auto"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {open && (
          <ul className="lg:hidden bg-blue-500 text-white px-4 pb-4 space-y-4 font-medium">
            <li><Link to="/" onClick={() => setOpen(false)} className="hover:text-gray-700 transition duration-200">Home</Link></li>
            <li><Link to="/technology" onClick={() => setOpen(false)} className="hover:text-gray-700 transition duration-200">Technology Solutions</Link></li>
            <li><Link to="/agro" onClick={() => setOpen(false)} className="hover:text-gray-700 transition duration-200">Agro &amp; Farming</Link></li>
            <li><Link to="/finance" onClick={() => setOpen(false)} className="hover:text-gray-700 transition duration-200">Financial Services</Link></li>
            <li><Link to="/real-estate" onClick={() => setOpen(false)} className="hover:text-gray-700 transition duration-200">Real Estate</Link></li>
            <li><Link to="/media" onClick={() => setOpen(false)} className="hover:text-gray-700 transition duration-200">Media &amp; PR</Link></li>
            <li><Link to="/academy" onClick={() => setOpen(false)} className="hover:text-gray-700 transition duration-200">Education &amp; Training</Link></li>
            <li><Link to="/growth" onClick={() => setOpen(false)} className="hover:text-gray-700 transition duration-200">Business Growth</Link></li>
            <li><Link to="/digital" onClick={() => setOpen(false)} className="hover:text-gray-700 transition duration-200">Digital Marketing</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;

