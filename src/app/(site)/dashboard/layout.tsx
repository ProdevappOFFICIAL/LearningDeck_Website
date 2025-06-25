import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    //Check the user here (protected route)
  return <div className="flex w-full h-full">{children}</div>;
};

export default DashboardLayout;
