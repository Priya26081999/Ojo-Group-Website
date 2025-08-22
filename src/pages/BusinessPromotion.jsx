import { TrendingUp, Lightbulb, Target, BarChart3, CheckCircle2 } from "lucide-react";

import Business1 from "../assets/buiness.jpg";
import BusinessPromotionImg from "../assets/BusinessPromotion.jpg"; 



import Business1 from '../assets/buiness.jpg';

export default function BusinessPromotion() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
     
      <div className="grid md:grid-cols-2 gap-10 items-center">
       
        <div className="flex justify-center">
          <img
            src={BusinessPromotionImg}
            alt="Business Growth"
            className="rounded-4xl shadow-lg w-full md:w-[90%] object-cover border-8 border-gray-200"
          />
        </div>

        
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Business Promotion - <span className="text-orange-600">“Think Smart. Build Bold. Scale Fast.”</span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Ojo Business Promotion helps startups, MSMEs, and enterprises grow through
            innovation, marketing, branding, and digital transformation. We partner, plan, and execute with you.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-pink-800">Our Services</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Lightbulb className="text-orange-600" /> Idea Validation & Strategy Planning
            </li>
            <li className="flex items-center gap-2">
              <Target className="text-orange-600" /> Brand Positioning & Marketing Advisory
            </li>
            <li className="flex items-center gap-2">
              <TrendingUp className="text-orange-600" /> Lead Generation & Digital Roadmaps
            </li>
            <li className="flex items-center gap-2">
              <BarChart3 className="text-orange-600" /> Funnel Design & ROI Measurement
            </li>
          </ul>
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 gap-10 items-center mt-30">
      
        <div className="order-2 md:order-1 flex justify-center">
          <img
            src={Business1}
            alt="Team Collaboration"
            className="rounded-full shadow-lg w-full md:w-[90%] object-cover border-6 border-gray-200"
          />
        </div>

        
        <div className="order-1 md:order-2">
          <h3 className="text-3xl font-bold mb-4 text-red-700">Why Choose Ojo Business Promotions?</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-600" /> Expertise across Tech, Marketing & Compliance
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-600" /> Tailored, Practical & Affordable Solutions
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-600" /> Consulting for Startups & SMEs
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-600" /> Human-focused Strategy with Insights
            </li>
          </ul>

          <button className="mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow hover:bg-orange-700 transition">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
