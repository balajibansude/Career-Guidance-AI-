import React from "react";

const tutorials = [
  {
    title: "Web Development",
    description: "Build modern websites using HTML, CSS, JavaScript & React.",
    level: "Beginner",
    duration: "3 Months",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    outcome: "Frontend Developer",
    link: "https://www.freecodecamp.org"
  },
  {
    title: "Data Science",
    description: "Analyze data and build models using Python & ML.",
    level: "Intermediate",
    duration: "4 Months",
    skills: ["Python", "Pandas", "ML"],
    outcome: "Data Analyst",
    link: "https://www.coursera.org"
  },
  {
    title: "AI / Machine Learning",
    description: "Deep learning, neural networks and AI systems.",
    level: "Advanced",
    duration: "6 Months",
    skills: ["TensorFlow", "PyTorch", "AI"],
    outcome: "AI Engineer",
    link: "https://www.udemy.com"
  },
  {
    title: "UI/UX Design",
    description: "Design user-friendly interfaces and experiences.",
    level: "Beginner",
    duration: "2 Months",
    skills: ["Figma", "Design Thinking"],
    outcome: "UI/UX Designer",
    link: "https://www.behance.net"
  },
  {
    title: "Cybersecurity",
    description: "Learn ethical hacking, penetration testing & security.",
    level: "Advanced",
    duration: "5 Months",
    skills: ["Kali Linux", "Networking", "Security"],
    outcome: "Security Analyst",
    link: "https://www.cybrary.it"
  },
  {
    title: "Cloud Computing",
    description: "Work with AWS, Azure & cloud infrastructure.",
    level: "Intermediate",
    duration: "4 Months",
    skills: ["AWS", "Docker", "Cloud"],
    outcome: "Cloud Engineer",
    link: "https://aws.amazon.com/training"
  },
  {
    title: "Mobile App Development",
    description: "Build Android & iOS apps using modern frameworks.",
    level: "Intermediate",
    duration: "3 Months",
    skills: ["Flutter", "React Native"],
    outcome: "App Developer",
    link: "https://developer.android.com"
  },
  {
    title: "DevOps Engineering",
    description: "Automate deployment and manage CI/CD pipelines.",
    level: "Advanced",
    duration: "4 Months",
    skills: ["Docker", "Kubernetes", "CI/CD"],
    outcome: "DevOps Engineer",
    link: "https://www.udemy.com"
  }
];

const Tutorial = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 relative animate-fadeIn">

      {/* 🌈 BACKGROUND */}
      <div className="absolute top-[-80px] right-[-80px] w-72 h-72 bg-[#2CB5A6] opacity-10 rounded-full blur-3xl animate-pulse"></div>

      {/* 🟣 TITLE */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold tracking-tight text-[#222]">
          Learning Roadmaps 📚
        </h1>
        <p className="text-gray-500 mt-3">
          Explore structured career paths and start your journey today
        </p>
      </div>

      {/* 🎯 CARDS */}
      <div className="grid md:grid-cols-2 gap-10 px-4">

        {tutorials.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white/70 backdrop-blur-lg p-6 rounded-2xl 
            shadow-sm border border-gray-100 overflow-hidden
            hover:shadow-xl hover:-translate-y-3 transition-all duration-300"
          >

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#5B6FFF]/10 to-[#2CB5A6]/10 opacity-0 group-hover:opacity-100 transition"></div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-[#5B6FFF] relative z-10">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-2 relative z-10">
              {item.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-3 relative z-10">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Info */}
            <div className="mt-4 flex justify-between text-sm relative z-10">
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                {item.level}
              </span>
              <span className="text-gray-500">{item.duration}</span>
            </div>

            {/* Outcome */}
            <p className="mt-3 text-sm text-gray-500 relative z-10">
              🎯 Career: <span className="font-medium">{item.outcome}</span>
            </p>

            {/* Button */}
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="block mt-5 text-center bg-[#5B6FFF] text-white py-2 rounded-full 
              hover:bg-[#4a5be0] hover:scale-105 transition-all duration-300 shadow-md relative z-10"
            >
              Start Learning 🚀
            </a>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Tutorial;