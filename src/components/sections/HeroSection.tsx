import React from "react";
import HeroHeaderSection from "./HeroHeaderSection";
import MainButton from "../common/MainButton";
import { cn } from "@/lib/utils";
import { gilroyBold } from "@/lib/utils";
import { HeroYoutubeModal } from "../modals/HeroYoutubeModal";
import { Button } from "../ui/button";

function HeroSection() {
  return (
    <section>
      <HeroHeaderSection />
      <div>
        <div
          className={cn(
            gilroyBold.className,
            "text-4xl md:text-[92px] text-center text-primary md:leading-[5.5rem] my-8"
          )}
        >
        <div className=" text-green-600">Ultimate </div>  gateway to success
        </div>

        <p className="mb-8 text-[22px] text-center text-[#31373D]">
          Transforming education with  innovative tools for learning, collaboration, and seamless exam management
        </p>

        <div className="flex gap-[12px] justify-center">
        <Button className="rounded-full bg-green-600" > Start for free</Button>
        <Button className="rounded-full" variant={'outline'} > Get Started </Button>
        </div>

        <div className="flex w-full justify-center">
          <HeroYoutubeModal />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
