
import { Home, Building2, FileText, Briefcase, Users, MapPin } from "lucide-react";
import Real1 from "../assets/real1.jpg";


export default function RealEstateSection() {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-white" />,
      title: "Property Sales",
      desc: "Residential plots, flats, villas, and commercial buildings with project marketing support."
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Real Estate Development",
      desc: "Housing projects, gated communities, and modern urban infrastructure."
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Investment Consulting",
      desc: "Property valuation, ROI analysis, and portfolio planning."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "Rental Services",
      desc: "Homes, shops, offices, vacation rentals, PGs, staff housing, and event halls."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Tenant & Legal Support",
      desc: "Property verification, documentation, and professional tenant management."
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "Who We Serve",
      desc: "Families, startups, investors, NRI buyers, and small business owners."
    }
  ];

  return (
   <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-5">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 grid lg:grid-cols-2 gap-12 items-center w-full mt-10">
        
     
        <div className="flex justify-center mb-5 lg:mb-55" >
          <img
            src={Real1}
            alt="Real Estate"
            className="rounded-full shadow-2xl w-full max-w-md lg:max-w-lg border-4 border-amber-200"
          />
        </div>

     
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Real Estate & Rentals -{" "}
            <span className="text-yellow-300">Property Solutions Made Simple</span>
          </h2>
          <p className="mb-8 text-lg text-gray-100">
            Ojo Real Estate & Rental offers trusted end-to-end property solutions for buying, selling,
            leasing, and rentals. We help you invest smartly and live comfortably.
          </p>

         
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-200 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


