import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto animate-fadeIn">

      {/* 🟣 HERO */}
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold text-[#222] leading-tight">
          AI-Powered Career Guidance 🚀
        </h1>

        <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
          Discover the right career path based on your skills, interests,
          and personalized AI-driven insights.
        </p>

        <button
          onClick={() => navigate("/test")}
          className="mt-8 bg-indigo-500 text-white px-8 py-3 rounded-full 
          hover:bg-indigo-600 hover:scale-105 transition-all duration-300 shadow-md"
        >
          Take Career Test
        </button>
      </div>

      {/* 🟡 HOW IT WORKS */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Take Test",
              desc: "Answer a few questions about your interests."
            },
            {
              title: "AI Analysis",
              desc: "Our AI analyzes your responses and strengths."
            },
            {
              title: "Get Guidance",
              desc: "Receive career paths and learning roadmap."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md text-center 
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}

        </div>
      </div>

      {/* 🔵 FEATURES */}
      <div className="py-16 bg-gray-50 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6 px-6">

          {[
            "🤖 AI-Based Career Suggestions",
            "📊 Personalized Analysis",
            "🧭 Step-by-Step Roadmap",
            "📚 Learning Resources"
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-md 
              hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {feature}
            </div>
          ))}

        </div>
      </div>

      {/* 🔴 PROBLEM */}
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold">
          Confused about your career?
        </h2>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Many students struggle to choose the right path. Our system
          helps you make confident decisions using AI insights.
        </p>
      </div>

      {/* 🟢 CTA */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">
          Ready to discover your future?
        </h2>

        <button
          onClick={() => navigate("/test")}
          className="mt-5 bg-green-500 text-white px-8 py-3 rounded-full 
          hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-md"
        >
          Start Now 🚀
        </button>
      </div>

    </div>
  );
};

export default Home;