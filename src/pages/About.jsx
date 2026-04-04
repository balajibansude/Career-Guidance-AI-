import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto animate-fadeIn">

      {/* 🟣 HERO */}
      <div className="text-center py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-[#222]">
          About Career Pilot 🚀
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Empowering students with AI-driven insights to make smarter career decisions.
        </p>
      </div>

      {/* 📊 STATS SECTION */}
      <div className="grid md:grid-cols-3 gap-6 py-10 text-center">

        {[
          { number: "100+", label: "Students Guided" },
          { number: "AI-Based", label: "Smart Analysis" },
          { number: "4+", label: "Career Paths Suggested" }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 
            hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-[#5B6FFF]">
              {item.number}
            </h2>
            <p className="text-gray-500 mt-2">{item.label}</p>
          </div>
        ))}

      </div>

      {/* 🔴 PROBLEM */}
      <div className="py-16">
        <h2 className="text-2xl font-semibold mb-4">
          The Problem
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Many students are confused when choosing a career due to lack of
          proper guidance and awareness. Traditional systems provide generic
          advice that doesn’t match individual skills and interests.
        </p>
      </div>

      {/* 🟢 SOLUTION */}
      <div className="py-16">
        <h2 className="text-2xl font-semibold mb-4">
          Our Solution
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Career Pilot uses AI to analyze user responses and generate personalized
          career recommendations, roadmaps, and learning resources. This helps
          students make confident and informed decisions.
        </p>
      </div>

      {/* 🔵 FEATURES */}
      <div className="py-16">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "🤖 AI-Based Career Guidance",
            "📊 Personalized Analysis",
            "🧭 Step-by-Step Roadmaps",
            "📚 Learning Resources",
            "⚡ Fast Assessment System",
            "🎯 Focused Career Recommendations"
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 
              hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {feature}
            </div>
          ))}

        </div>
      </div>

      {/* 🧠 HOW IT WORKS */}
      <div className="py-16">
        <h2 className="text-2xl font-semibold mb-6">
          How It Works
        </h2>

        <ol className="list-decimal ml-6 text-gray-600 space-y-2">
          <li>Take a simple career assessment test</li>
          <li>AI analyzes your responses</li>
          <li>Get personalized career suggestions</li>
          <li>Follow roadmap and improve your skills</li>
        </ol>
      </div>

      {/* 💡 VISION + MISSION */}
      <div className="grid md:grid-cols-2 gap-6 py-16">

        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2">🎯 Our Vision</h3>
          <p className="text-gray-600">
            To help every student make confident and informed career decisions
            using the power of AI.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2">🚀 Our Mission</h3>
          <p className="text-gray-600">
            To provide personalized career guidance and structured learning
            paths for students worldwide.
          </p>
        </div>

      </div>

      {/* 🟡 FINAL NOTE */}
      <div className="text-center py-12">
        <p className="text-gray-500 italic text-lg">
          "Your future starts with the right decision."
        </p>
      </div>

    </div>
  );
};

export default About;