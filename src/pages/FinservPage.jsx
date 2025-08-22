
 import Fin1 from '../assets/fin1.jpg';
 import Fin2 from '../assets/fin2.jpg';

import { Briefcase, Home, CreditCard, TrendingUp, ShieldCheck, Users } from "lucide-react";

export default function FinservPage() {
  return (
    <div className="w-full">
     
      <section className="bg-purple-200 py-12 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
         
          <div className="flex justify-center">
            <img
              src={Fin2}
              alt="Loans"
              className="max-w-sm w-full rounded-4xl shadow-lg border-4 border-amber-100"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-4 text-pink-700">
              FinServ - Your Trust, Our Responsibility
            </h2>
            <p className="text-green-700 mb-6 leading-relaxed font-bold">
              Ojo FinServ is dedicated to simplifying finance. Whether you're dreaming 
              of a new home, expanding your business, or funding your studies - we make 
              financial access <span className="font-semibold text-amber-700">simple, quick, and transparent.</span>
            </p>
            <ul className="space-y-4 text-gray-700 text-1xl font-bold">
              <li className="flex items-center gap-2">
                <Briefcase className="text-amber-600" size={30}/> Business Loans for SMEs
              </li>
              <li className="flex items-center gap-2">
                <Home className="text-green-600"  size={30}/> Easy Home & Vehicle Loans
              </li>
              <li className="flex items-center gap-2">
                <CreditCard className="text-blue-600"size={30} /> Flexible Personal Loans
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="text-purple-600" size={30} /> Agri & Digital Finance Tools
              </li>
            </ul>
          </div>
        </div>
      </section>

     
      <section className="bg-purple-300 py-12 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
         
          <div>
            <h2 className="text-4xl font-bold mb-5 text-green-700">
              Why Choose Ojo Finance?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed font-bold">
              We are not just another finance company. 
              With a foundation built on <span className="font-semibold text-blue-700">ethics, speed, and technology</span>, 
              we bridge the gap between aspirations and opportunities.
            </p>
            <ul className="space-y-3 text-gray-700  font-bold">
              <li className="flex items-center gap-2">
                <ShieldCheck className="text-green-600" size={30}/> Transparent rates - no hidden charges
              </li>
              <li className="flex items-center gap-2">
                <Users className="text-pink-600"  size={30}/> Serving urban & rural customers equally
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="text-indigo-600" size={30} /> Fast digital approvals & secure process
              </li>
            </ul>
          </div>
        
          <div className="flex justify-center">
            <img
              src={Fin1}
              alt="Finance"
              className="max-w-sm w-full rounded-full shadow-lg border-8 border-pink-200"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

