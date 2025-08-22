

import { Megaphone, Search, TrendingUp, Mail, Users, CheckCircle } from "lucide-react";
import Digit1 from '../assets/digital1.jpg';
import Digit2 from '../assets/digital2.jpg';

export default function DigitalMarketing() {
  return (
    <div className="w-full">
     
      <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-8">
       
        <div className="flex-1 flex justify-center">
          <img
            src={Digit1}
            alt="Digital Marketing Strategy"
            className="w-full max-w-md rounded-lg shadow"
          />
        </div>

       
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
            Digital Marketing <span className="text-orange-600">Made Simple</span>
          </h1>
          <p className="mt-4 text-gray-600 font-bold">
            We create strategies that boost your brand visibility, attract
            customers, and help your business grow online — with real results.
          </p>
        </div>
      </section>

     
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8 text-lime-500">Our Digital Services</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <ServiceCard
                icon={<Megaphone size={32} />}
                title="Social Media Marketing"
                desc="Campaigns on Facebook, Instagram, LinkedIn & more."
              />
              <ServiceCard
                icon={<Search size={32} />}
                title="SEO & Performance"
                desc="Boost your ranking on Google and improve visibility."
              />
              <ServiceCard
                icon={<TrendingUp size={32} />}
                title="Ads & Paid Marketing"
                desc="Google Ads, Meta Ads, and targeted campaigns."
              />
              <ServiceCard
                icon={<Mail size={32} />}
                title="Email Marketing"
                desc="Reach your audience with creative email campaigns."
              />
              <ServiceCard
                icon={<Users size={26} />}
                title="Influencer Marketing"
                desc="Promote your brand with trusted influencers."
              />
              <ServiceCard
                icon={<CheckCircle size={26} />}
                title="Website Optimization"
                desc="Better design, UI/UX, and high conversion rates."
              />
            </div>
          </div>

         
          <div className="flex-1 flex justify-center">
            <img
              src={Digit2}
              alt="Digital Marketing Growth"
              className="w-full max-w-md rounded-lg shadow"
            />
          </div>
        </div>
      </section>

     
      <section className="py-12 px-4">
        <h3 className="text-3xl font-bold text-center mb-6 text-fuchsia-700">Why Choose Us?</h3>
        <div className="max-w-3xl mx-auto grid gap-4">
          {[
            "Affordable for startups, scalable for enterprises",
            "Transparent reports & real growth — not vanity metrics",
            "Experienced team with creative strategies",
            "Tailored digital solutions for your business goals",
          ].map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="text-green-600 mt-1" size={25} />
              <p className="text-gray-700 font-bold">{point}</p>
            </div>
          ))}
        </div>
      </section>

      </div>

     
  );
}


function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition">
      <div className="flex justify-center items-center w-10 h-10 mx-auto mb-2 text-orange-600">
        {icon}
      </div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  );
}
