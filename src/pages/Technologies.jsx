
import { CheckCircle, Smartphone, Code, Users, GraduationCap, Briefcase } from "lucide-react";
import Tech from '../assets/technology.jpg'

export default function Technologies() {
  return (
    <div className="w-full">
     
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center gap-10">
       
        <div className="flex-1 flex justify-center">
          <img
            src={Tech}
            alt="Digital Innovation"
            className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-lg"
          />
        </div>

       
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-800 leading-snug">
            Empowering Digital Innovation
          </h1>
          <p className="mt-4 text-pink-600 text-lg">
            Delivering software solutions, cloud platforms, and custom app development to help businesses grow in a digital-first world.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow hover:bg-orange-700 transition">
            Explore Services
          </button>
        </div>
      </section>

      
      <section className="bg-gray-50 py-16 px-6 lg:px-12 text-purple-700">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard icon={<Code size={30} />} title="Custom Software Development" desc="Tailored applications built to your exact business needs." />
          <ServiceCard icon={<Smartphone size={30} />} title="Mobile & Web App Development" desc="Intuitive, high-performance apps for iOS, Android & web." />
          <ServiceCard icon={<Users size={30} />} title="IT Consulting" desc="Strategic guidance to future-proof your operations." />
          <ServiceCard icon={<GraduationCap size={30} />} title="IT Training" desc="Curriculum designed to meet current IT industry demands." />
        </div>
      </section>

    
      <section className="py-16 px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-purple-700">Industries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Fintech", "Logistics", "Education", "Enterprise", "Healthcare", "Retail", "E-Commerce"].map((industry) => (
            <span key={industry} className="px-7 py-5 bg-orange-300 text-orange-700 rounded-full shadow text-sm font-medium">
              {industry}
            </span>
          ))}
        </div>
      </section>

     
      <section className="bg-gray-50 py-16 px-6 lg:px-12">
        <h3 className="text-3xl font-bold text-center mb-12 text-green-700">Business Models</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard icon={<Briefcase size={35} />} title="Product-Based" desc="Develop and sell software products like ERP systems." />
          <ServiceCard icon={<Briefcase size={35} />} title="Service-Based" desc="Custom software development and outsourcing." />
          <ServiceCard icon={<Briefcase size={35} />} title="Hybrid Model" desc="Mix of product and service offerings." />
        </div>
      </section>

    
      <section className="py-16 px-6 lg:px-12">
        <h3 className="text-3xl font-bold text-center mb-10 text-pink-500">Why Choose Us?</h3>
        <div className="max-w-4xl mx-auto grid gap-4">
          {[
            "Client-first approach with transparent communication",
            "Agile and adaptive development methodology",
            "Skilled and certified tech professionals",
            "Focus on quality, performance, and security",
            "Trusted partner for startups and enterprises"
          ].map((point, index) => (
            <div key={index} className="flex  items-start gap-3">
              <CheckCircle className="text-green-600 mt-1" size={22} />
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>
      </div>
  );
}


function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
      <div className="flex justify-center items-center w-14 h-14 mx-auto mb-4 text-orange-600">
        {icon}
      </div>
      <h4 className="text-lg  text-gray-800 font-bold">{title}</h4>
      <p className="text-medium text-gray-600 mt-2">{desc}</p>
    </div>
  );
}
