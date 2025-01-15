import NavBar from "@/components/common/NavBar";
import AlertSection from "@/components/sections/AlertSection";

   const RootLayout = (
    {children}:
    {
    children: React.ReactNode;
   }) => {
    return (
 <div className="flex flex-col w-full h-full">
   
        <NavBar />
    
    {children}
    </div> );
   }
    
   export default RootLayout;