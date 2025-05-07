import React from "react";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";
import { HeroYoutubeModal } from "../modals/HeroYoutubeModal";
import Image from "next/image";
import styles from "./CRMSection.module.css"; // Create this CSS module

function CRMSection() {
  const cardData = {
    avatarUrl: "/images/degrasse.png",
    review: "“u comme”",
    name: "Oyewale Peter",
    position: "Administrator at UTSC",
  };

  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <div >
          <img src="/start_server.gif" alt="CRM demo"     className="hover:cursor-pointer  rounded-md border bg-blend-overlay pb-3 " />
        </div>
        <div className="flex flex-col space-y-4 rounded-md border p-3 ">
          <h2>Start a server easily in on tap</h2>
          <p>This start server on the selected host device like "MY COMPUTER" or maybe "WIFI NETWORK"</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div >
          <img src="/miniapp.gif" alt="CRM demo"     className="hover:cursor-pointer  rounded-md border bg-blend-overlay pb-3 " />
        </div>
      
      </div>
    </section>
  );
}

export default CRMSection;
