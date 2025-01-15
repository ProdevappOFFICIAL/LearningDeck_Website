import React from "react";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";
import { HeroYoutubeModal } from "../modals/HeroYoutubeModal";

function CRMSection() {
  const cardData = {
    avatarUrl: "/images/degrasse.png",
    review:
      "“u comme”",
    name: "Oyewale Peter",
    position: "Adminstrator at UTSC",
  };
  return (
    <section>
      <div>
        <CustomHeader
          title="What do we offer?"
          description="LearningDeck offers not only students with a standard elearning platform, We also cater for schools  "
        />
        
        <div className= "flex items-center space-x-2 p-5  rounded  ml-10 text-[#31373D] text-[22px] mt-4 p-10">
         
        <div className="w-fit rounded-full px-3 py-1 text-white bg-green-600 "> 1</div>
              <div className="text-[#31373D] text-[18px]">
                E-learning Software for students
              </div>
       
        </div>
        <div className="flex  s my-5 rounded-md border-gray-300/20 border-2 ">
  <div className="flex flex-col px-20">
     
          <img
          src="/dark.png"
          alt="hero image"
          className="hover:cursor-pointer rounded-md border-gray-400/20 border-[10px] bg-blend-overlay  "
        />
        </div>
        </div>
       
        <div className= "flex items-center space-x-2 p-5  rounded  ml-10 text-[#31373D] text-[22px] mt-4 p-10">
         
         <div className="w-fit rounded-full px-3 py-1 text-white bg-green-600 "> 2</div>
               <div className="text-[#31373D] text-[18px]">
                 School management Platform
               </div>
        
         </div>
      </div>
      <div className="flex  s my-5 rounded-md border-gray-300/20 border-2 ">
  <div className="flex flex-col px-20">
     
          <img
          src="/exam_soft.png"
          alt="hero image"
          className="hover:cursor-pointer rounded-md border-gray-400/20 border-[10px] bg-blend-overlay  "
        />
        </div>
        </div>
    
      <div>
        <ReviewCard {...cardData} />
      </div>
    </section>
  );
}

export default CRMSection;
