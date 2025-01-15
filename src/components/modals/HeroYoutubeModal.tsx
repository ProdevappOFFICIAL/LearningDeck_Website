import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import YoutubeIframe from "../common/YoutubeIFrame";
import AnimatedBorderTrail from "../common/AnimatedBorderTrail";
import Image from "next/image";


export function HeroYoutubeModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hidden  s my-5 rounded-md border-gray-300/20 border-2 ">
       
          <img
          src="/dark.png"
          alt="hero image"
          className="hover:cursor-pointer  rounded-md border-gray-400/20 border-[10px] bg-blend-overlay  "
        />
        </div>
      
      </DialogTrigger>
      <DialogContent className="p-2 min-w-full md:min-w-[calc(100vw-800px)]">
        <AnimatedBorderTrail trailSize="lg">
         <Image width={100} height={100} src='/homepage.png' alt="lds-logo"/>
        </AnimatedBorderTrail>
      </DialogContent>
    </Dialog>
  );
}
