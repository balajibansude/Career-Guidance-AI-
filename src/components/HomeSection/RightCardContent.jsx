import { ArrowRight } from "lucide-react";
import React from "react";

const RightCardContent = (props) => {
  console.log(props.color);

  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-sm leading-relaxed text-white mb-10">
          AI analyzes your profile to match you with the most suitable career
          paths and opportunities.
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full">
            {props.tag}
          </button>
          <button className="text-white font-medium px-3 py-2 rounded-full">
            <ArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
