import React from "react";
import MainButton from "../common/MainButton";
import Image from "next/image";
import { Button } from "../ui/button";
function FooterSection() {
  const data = {
    product: [
      "Changelog",
      "Customer stories",
      "Security",
      "Chrome extension",
      "iOS App",
      "Android App",
      "Desktop App"
    ],
    company: ["About", "Blog", "Scholarship"],
    LearningDeckFor: ["Students", "Schools"],
    support: ["Help Center", "Talk to support", "API docs", "System status"],
  };
  return (
    <section className="bg-green-600 px-4 md:px-[94px] py-[90px]">
        <div className="flex items-center space-x-2  py-1 rounded-full">
            <Image src={'/lds.png'} width={40} height={40} alt="" className=" rounded-full border-[5px] border-green-300/20 animate-pulse"/>
            <div className="flex text-green-300 font-extrabold text-[22px]">
              Learning
              <p className=" text-white ml-1">
                Deck
              </p>
            </div>
          </div>
      <div className="mt-[32px] pb-[50px] flex justify-between w-full gap-8 flex-col md:flex-row flex-wrap">
        <div>
          <p className="text-green-300 mb-[12px]">Product</p>
          <div className="flex flex-col gap-3">
            {data.product.map((item, index) => (
              <p key={index} className="text-white hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-green-300 mb-[12px]">Company</p>
          <div className="flex flex-col gap-3">
            {data.company.map((item, index) => (
              <p key={index} className="text-white hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-green-300 mb-[12px]">LearningDeck for</p>
          <div className="flex flex-col gap-3">
            {data.LearningDeckFor.map((item, index) => (
              <p key={index} className="text-white hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-green-300 mb-[12px]">Support</p>
          <div className="flex flex-col gap-3">
            {data.support.map((item, index) => (
              <p key={index} className="text-white hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="min-w-[300px]">
          <p className="font-medium text-green-300 mb-4">Ready to explore?</p>
          <div className="flex flex-col gap-[12px] justify-start">
           <Button className="text-white bg-green-300/20 border">Start for free</Button>
            <Button className="" variant={'outline'}>Talk to sales</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
