
import { MapPin, Cpu, Users, Rocket, Eye, Lightbulb, Heart, Shield, Target, Award } from "lucide-react";
import Img1 from "../assets/technology.jpg"; 

const HomePage = () => {
  return (
    <main className="w-full font-sans bg-gradient-to-b from-gray-100 via-white to-gray-100">

      
      <section className="relative h-[100vh] flex items-center justify-center text-center text-white">
        <img src={Img1} alt="Meeting" className="absolute w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to Our Company</h1>
          <p className="mt-4 text-lg md:text-xl">Together we create growth and innovation</p>
          <button className="mt-6 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition transform hover:scale-105 active:scale-95">
            Get Started
          </button>
        </div>
      </section>

    
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-white shadow-xl rounded-xl p-6 space-y-3">
          <h2 className="text-3xl font-bold mb-4 text-green-700">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            We are a forward-thinking organization that delivers solutions in technology, finance, and education. Our team is passionate about building a future where businesses and communities thrive together.
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 shadow-xl rounded-xl p-6 space-y-3">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Quick Facts</h3>
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="w-5 h-5 text-orange-500" />
            <span>Headquartered in India</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Cpu className="w-5 h-5 text-orange-500" />
            <span>Focused on Technology & Innovation</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Users className="w-5 h-5 text-orange-500" />
            <span>Serving Communities Worldwide</span>
          </div>
        </div>
      </section>

     
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-2">
              <Rocket className="w-6 h-6 text-orange-500" />
              <h3 className="text-2xl font-bold text-green-700">Mission</h3>
            </div>
            <p className="text-gray-600">
              To innovate and provide solutions that empower businesses and communities for a sustainable future.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-2">
              <Eye className="w-6 h-6 text-orange-500" />
              <h3 className="text-2xl font-bold text-green-700">Vision</h3>
            </div>
            <p className="text-gray-600">
              To be a globally trusted leader recognized for excellence, transparency, and innovation.
            </p>
          </div>
        </div>
      </section>

     
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: Lightbulb, title: "Innovation", desc: "We bring fresh ideas to solve modern challenges." },
            { icon: Heart, title: "Passion", desc: "We care deeply about what we do and the impact we create." },
            { icon: Shield, title: "Integrity", desc: "We uphold honesty, transparency, and strong ethics." },
            { icon: Target, title: "Commitment", desc: "We are dedicated to delivering quality and value." },
            { icon: Users, title: "Collaboration", desc: "We work together to achieve shared goals." },
            { icon: Award, title: "Excellence", desc: "We strive to exceed expectations in everything we do." }
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:scale-105 hover:shadow-lg transition text-center">
              <value.icon className="w-8 h-8 mx-auto text-orange-500 mb-3" />
              <h4 className="text-xl font-semibold mb-2 text-green-700">{value.title}</h4>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="max-w-3xl mx-auto px-6 py-20 bg-gray-300 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">We Value Your Feedback</h2>
          <p className="text-gray-600 mt-2">Your thoughts help us improve. Share your feedback below.</p>
        </div>
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-gray-100">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <textarea
            placeholder="Your Feedback"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-medium px-6 py-3 rounded-xl shadow-md transition transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Submit Feedback
          </button>
        </form>
      </section>

      
    </main>
  );
};

export default HomePage;


 

