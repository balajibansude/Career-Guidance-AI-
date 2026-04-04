// src/components/HomeSection/Page1Content.jsx

import { useState } from "react";

const Page1Content = () => {

  const [interest, setInterest] = useState("");
  const [skills, setSkills] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const getCareer = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          skills: skills.split(","),
          interest
        })
      });

      const data = await res.json();
      setResult(data.result);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      
      <h1 className="text-3xl font-bold text-center">
        Career Pilot 🚀
      </h1>

      {/* Interest Input */}
      <input
        type="text"
        placeholder="Enter your interest (AI, Design, Business)"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        className="border p-2 mt-6 block w-full rounded"
      />

      {/* Skills Input */}
      <input
        type="text"
        placeholder="Enter skills (comma separated)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        className="border p-2 mt-3 block w-full rounded"
      />

      {/* Button */}
      <button
        onClick={getCareer}
        className="bg-blue-500 text-white px-4 py-2 mt-4 w-full rounded hover:bg-blue-600"
      >
        Get Career Guidance
      </button>

      {/* Loading */}
      {loading && (
        <p className="mt-4 text-center">Generating guidance...</p>
      )}

      {/* Result */}
      <div className="mt-6 p-4 border rounded bg-gray-100 whitespace-pre-line">
        {result}
      </div>

    </div>
  );
};

export default Page1Content;