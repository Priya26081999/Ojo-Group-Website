import Media from '../assets/media1.jpg'
import Media1 from '../assets/media2.jpg'
import { Mic, Newspaper, Users, Star, Sparkles } from "lucide-react";

const MediaRelations = () => {
  return (
    <section className="w-full bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50 py-16 px-6 space-y-16">
      
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
     
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-orange-600">
            Media Relations & PR Excellence
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-bold text-pink-600">Ojo Media Relations</span>, 
            we create stories that people remember and build strategies that connect.
          </p>
          <p className="text-gray-700 leading-relaxed font-bold">
            From new startups to growing brands, we help you share the right message 
            with the right audience through trusted media channels.
          </p>
        </div>

       
        <div className="flex justify-center">
          <img
            src={Media}
            alt="Media Coverage"
            className="rounded-3xl shadow-lg w-full max-w-md object-cover border-8 border-pink-100"
          />
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      
        <div className="flex justify-center order-2 md:order-1">
          <img
            src={Media1}
            alt="Media Coverage"
            className="rounded-3xl shadow-lg w-full max-w-sm object-cover border-8 border-pink-300"
          />
        </div>

       
        <div className="space-y-3 order-1 md:order-2">
          <h3 className="text-3xl font-bold text-orange-500">Our Expertise</h3>
          <p className="text-gray-700 leading-relaxed">
            We focus on <span className="text-orange-600 font-bold">press coverage, 
            brand growth, media training, and event promotions</span>.  
            With strong connections in the media world, we make sure your brand 
            gets the attention and trust it deserves.
          </p>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-pink-500 mb-6 text-center">What We Offer</h3>
        <ul className="grid sm:grid-cols-2 gap-4 text-gray-800">
          <li className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-sm">
            <Mic className="text-pink-500" size={30} />
            <span><strong>Strategic PR</strong> - Press releases & storytelling</span>
          </li>
          <li className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-sm">
            <Newspaper className="text-orange-500" size={30} />
            <span><strong>Media Outreach</strong> - TV, Radio, Print & Digital</span>
          </li>
          <li className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-sm">
            <Users className="text-yellow-500" size={30} />
            <span><strong>Public Events</strong> - Training & coverage</span>
          </li>
          <li className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-sm">
            <Star className="text-purple-500" size={30} />
            <span><strong>Brand Building</strong> - Grow trust with media</span>
          </li>
          <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm sm:col-span-2">
            <Sparkles className="text-green-500" size={30} />
            <span><strong>Why Us?</strong> - Creative ideas & proven results</span>
          </li>
        </ul>
      </div>

    </section>
  );
};

export default MediaRelations;
