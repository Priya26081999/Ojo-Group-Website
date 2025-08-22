import Product1 from '../assets/product1.jpg'
import Product2 from '../assets/product2.jpg'
import Product3 from '../assets/product3.jpg'
import { Leaf, Tractor, Sprout, CheckCircle } from "lucide-react";

function AgroProducts() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-24">
      
      
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-pink-600">
          Agro Products <span className="text-green-600">Ojo Agro</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Empowering farmers with technology-driven agriculture, 
          sustainable practices, and efficient supply chains.
        </p>
        <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
      </div>

     
      <div className="flex flex-col md:flex-row items-center gap-10 bg-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <img
          src={Product1}
          alt="Smart Farming"
          className="w-56 sm:w-64 md:w-80 rounded-3xl shadow-lg object-cover hover:scale-105 transition-transform border-4 border-cyan-100"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold flex items-center gap-2 mb-6 text-fuchsia-700">
            <Leaf className="text-green-600" size={35} /> Our Focus Areas
          </h2>
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} /> Smart Farming & IoT-based solutions
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} /> Precision agriculture with drones
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} /> Organic fertilizers & eco-friendly pest control
            </li>
          </ul>
        </div>
      </div>

    
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 bg-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <img
          src={Product3}
          alt="Supply Chain"
          className="w-56 sm:w-64 md:w-80 rounded-full shadow-lg object-cover hover:scale-105 transition-transform border-2 border-teal-200"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold flex items-center gap-2 mb-6 text-orange-500">
            <Tractor className="text-green-600" size={35} /> Agri Supply Chain
          </h2>
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} /> On-ground Farmer Training
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} /> Farm-to-market solutions
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} /> Retail & wholesale organic products
            </li>
          </ul>
        </div>
      </div>

 
      <div className="flex flex-col md:flex-row items-center gap-10 bg-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <img
          src={Product2}
          alt="Why Choose Us"
          className="w-56 sm:w-64 md:w-80 rounded-3xl shadow-lg object-cover hover:scale-105 transition-transform border-4 border-gray-200"
        />
        <div className="flex-1">
          <h3 className="text-3xl font-bold flex items-center gap-2 mb-6 text-red-500">
            <Sprout className="text-green-600" size={35} /> Why Choose Ojo Agro?
          </h3>
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} /> Sustainable & tech-powered farming
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} /> Fair-trade farmer engagement
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} /> Ethical & efficient supply chains
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AgroProducts;
