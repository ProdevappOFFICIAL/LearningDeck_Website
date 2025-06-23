import React from "react";
import FeatureCard from "../cards/FeatureCard";
import CustomStyledHeader from "../common/CustomStyledHeader";

function MoreFeaturesSection() {
  const features = [
    {
      iconUrl: "/images/f_1.png",
      title: "Offline-First",
      description: "Works fully without internet using Wi-Fi, LAN, or hotspot",
    },
    {
      iconUrl: "/images/f_2.png",
      title: "Zero Tech Skills Required",
      description:
        "Install, create, and run exams from a simple desktop app",
    },
    {
      iconUrl: "/images/f_3.png",
      title: "OnClick exams",
      description: "Create an exams without setting up complex environments",
    },
    {
      iconUrl: "/images/f_4.png",
      title: "Customizable & Secure",
      description: "Custom Exam Interfaces for doing exams",
    },
    {
      iconUrl: "/images/f_5.png",
      title: "Smooth Interface",
      description: "Interact with clean and smooth components",
    },
    {
      iconUrl: "/images/f_6.png",
      title: "Local Gating Server",
      description: "Offline intercommunication between client and admin desktop application",
    },
  ];
  return (
    <section className="bg-[#232529] px-4 md:px-[94px] py-[116px]">
      <div>
        <CustomStyledHeader
          titleColored="And so"
          titleUnColored="much more..."
          description="Why should you choose LearningDeck"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[64px]">
        {features.map((item, index) => (
          <FeatureCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default MoreFeaturesSection;
