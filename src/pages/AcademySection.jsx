import Academy1 from '../assets/academy1.jpg';
import Academy2 from '../assets/academy2.jpg';


import { Users, BookOpen, Handshake, Briefcase } from "lucide-react";

export default function AcademySection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20 px-6 lg:px-20 overflow-hidden">
     
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      
        <div className="flex justify-center lg:justify-start">
          <img
            src={Academy2}
            alt="Business handshake"
            className="rounded-3xl shadow-lg w-80 sm:w-96 lg:w-[420px] object-cover border-4 border-gray-400"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Academy -{" "}
            <span className="text-orange-600">
              Empowering Minds. Enabling Futures
            </span>
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            <strong>Ojo Academy</strong> is dedicated to shaping the next
            generation of thinkers, creators, and leaders. We provide
            high-quality, future-ready education and training programs that
            bridge the gap between academic knowledge and real-world skills.
          </p>

          <ul className="space-y-4 text-gray-800 text-base">
            <li>
              <span className="font-semibold text-orange-600">
                Tech & Digital Courses:
              </span>{" "}
              Web & App Development, Internship Training, Data Science, AI.
            </li>
            <li>
              <span className="font-semibold text-orange-600">
                Job-Ready Programs:
              </span>{" "}
              Communication & Soft Skills, Resume Workshops, Digital Marketing,
              Business English.
            </li>
            <li>
              <span className="font-semibold text-orange-600">
                School & College Enrichment:
              </span>{" "}
              STEM Clubs, Olympiad Training, Coding for Kids (Scratch, Python),
              Smart Classes.
            </li>
            <li>
              <span className="font-semibold text-orange-600">
                Entrepreneurship & Life Skills:
              </span>{" "}
              Bootcamps, Leadership, Financial Literacy, Women Empowerment.
            </li>
          </ul>

          <p className="mt-8 text-gray-600 text-lg">
            <strong>Why Ojo Academy?</strong> Industry-experienced mentors,
            project-based learning, certifications & job placement support with
            affordable and flexible learning models.
          </p>
        </div>
      </div>

      
      <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={Academy1}
            alt="Education Globe"
            className="rounded-full shadow-xl w-72 sm:w-80 lg:w-[400px] object-cover border-8 border-pink-50"
          />
        </div>

      
        <div>
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            Learning Beyond Limits
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed font-bold">
            At Ojo Academy, we go beyond textbooks. Our programs are designed to
            connect learners with real-world problems, interactive projects, and
            hands-on experiences. Every learner gets the opportunity to explore,
            create, and innovate.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Users className="text-orange-600 w-6 h-6" size={30} />
              <span className="text-gray-800">1000+ Students Trained</span>
            </li>
            <li className="flex items-center gap-3">
              <BookOpen className="text-blue-600 w-6 h-6"  size={30}/>
              <span className="text-gray-800">30+ Future-Ready Courses</span>
            </li>
            <li className="flex items-center gap-3">
              <Handshake className="text-green-600 w-6 h-6" size={30}/>
              <span className="text-gray-800">
                Partnerships with Schools & Colleges
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Briefcase className="text-purple-600 w-6 h-6" size={30} />
              <span className="text-gray-800">
                Career-Oriented Certifications
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

