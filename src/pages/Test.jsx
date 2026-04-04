import { useState } from "react";

const questionsData = {
  "Computer Engineering": [
    {
      question: "Which language is used for web development?",
      options: ["Python", "HTML", "C++", "Java"],
      answer: 1
    },
    {
      question: "Which is a frontend framework?",
      options: ["React", "Node.js", "Django", "Flask"],
      answer: 0
    },
    {
      question: "Which database is NoSQL?",
      options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
      answer: 1
    }
  ],

  "Medical Science": [
    {
      question: "What is normal body temperature?",
      options: ["98.6°F", "100°F", "95°F", "97°F"],
      answer: 0
    },
    {
      question: "Which organ pumps blood?",
      options: ["Brain", "Heart", "Liver", "Kidney"],
      answer: 1
    }
  ],

  "Mechanical Engineering": [
    {
      question: "Which law is used in thermodynamics?",
      options: ["Newton Law", "Ohm Law", "First Law", "Hooke Law"],
      answer: 2
    },
    {
      question: "Unit of force?",
      options: ["Joule", "Pascal", "Newton", "Watt"],
      answer: 2
    }
  ],

  "Arts & Design": [
    {
      question: "Which tool is used for UI design?",
      options: ["Figma", "VS Code", "MySQL", "Excel"],
      answer: 0
    },
    {
      question: "Color theory is related to?",
      options: ["Programming", "Design", "Math", "Physics"],
      answer: 1
    }
  ]
};

const Test = () => {
  const [field, setField] = useState("");
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [aiResult, setAiResult] = useState("");

  const questions = questionsData[field] || [];

  const handleAnswer = async (index) => {
    const isCorrect = questions[currentQ].answer === index;
    const newScore = isCorrect ? score + 1 : score;

    setScore(newScore);

    const next = currentQ + 1;

    if (next < questions.length) {
      setCurrentQ(next);
    } else {
      setShowResult(true);

      const res = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ score: newScore })
      });

      const data = await res.json();
      setAiResult(data.result);
    }
  };

  // 🟣 FIELD SELECTION
  if (!field) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center animate-fadeIn">

        <h1 className="text-4xl font-semibold mb-10">
          Choose Your Field 🎯
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {Object.keys(questionsData).map((f, i) => (
            <div
              key={i}
              onClick={() => setField(f)}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 
              cursor-pointer hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-[#5B6FFF]">{f}</h2>
              <p className="text-gray-500 mt-2">Start test for this field</p>
            </div>
          ))}

        </div>
      </div>
    );
  }

  // 🟢 RESULT
  if (showResult) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center animate-fadeIn">

        <h2 className="text-3xl font-semibold">
          Your Score: {score} / {questions.length}
        </h2>

        <div className="mt-6 p-6 bg-white rounded-2xl shadow border whitespace-pre-line">
          {aiResult || "Analyzing your performance... 🤖"}
        </div>

        <button
          onClick={() => {
            setField("");
            setCurrentQ(0);
            setScore(0);
            setShowResult(false);
            setAiResult("");
          }}
          className="mt-6 bg-[#5B6FFF] text-white px-6 py-3 rounded-full hover:bg-[#4a5be0]"
        >
          Retake Test
        </button>
      </div>
    );
  }

  // 🔵 TEST UI
  return (
    <div className="max-w-xl mx-auto py-20 animate-fadeIn">

      {/* Progress */}
      <div className="mb-6">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-[#5B6FFF] rounded-full transition-all duration-300"
            style={{
              width: `${((currentQ + 1) / questions.length) * 100}%`
            }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2 text-right">
          Question {currentQ + 1} / {questions.length}
        </p>
      </div>

      {/* Question */}
      <h2 className="text-xl font-semibold mb-6 text-center">
        {questions[currentQ].question}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {questions[currentQ].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className="w-full p-3 bg-white border rounded-xl 
            hover:bg-[#5B6FFF] hover:text-white transition-all duration-300"
          >
            {opt}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Test;