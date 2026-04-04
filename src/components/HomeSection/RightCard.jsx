import React from "react";
import { ArrowRight } from "lucide-react";
import RightCardContent from "./RightCardContent";


const RightCard = (props) => {
  return (
    <div className="h-[420px] w-[260px] relative bg-gray-200 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <img className="h-full  w-full object-cover" src={props.img} alt=""></img>
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard
