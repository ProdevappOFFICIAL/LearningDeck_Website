import { gilroyBold } from "@/lib/utils";
import { cn } from "@/lib/utils";
import React from "react";
import MainButton from "../common/MainButton";

function ReadyToBuildSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-16 py-10 items-center !bg-blue-600  px-4 md:px-[94px]">
      <div>
        <p
          className={cn(
            gilroyBold.className,
            "text-[40px] leading-tight md:leading-normal text-blue-200"
          )}
        >
          Get started
          <span className="text-white ml-3">now</span>
        </p>
     
      </div>
      <div>
      
      </div>
    </section>
  );
}

export default ReadyToBuildSection;
