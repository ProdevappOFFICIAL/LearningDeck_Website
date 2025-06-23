import { ChevronRight } from "lucide-react";
import React from "react";

function HeroHeaderSection() {
  return (
    <div className="flex justify-center text-[10px] sm:text-sm ">
      <div className="inline-flex  items-center gap-1 bg-white text-gray-800 border p-1 rounded-[100px] pr-[10px]">
        <div className="text-white inline-block bg-blue-600 p-2 rounded-[100px] text-[10px] font-semibold">
          New
        </div>
        <p className="">
         See How Schools uses LearningDeck to power their Examinations and Test
        </p>
        <div>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

export default HeroHeaderSection;