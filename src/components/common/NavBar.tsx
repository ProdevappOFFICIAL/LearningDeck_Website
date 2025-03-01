"use client";

import { useState } from "react";
import { AppWindow, Newspaper, Smartphone, X } from "lucide-react";
import MainButton from "./MainButton";
import Image from "next/image";
import { Button } from "../ui/button";
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


function NavBar() {
  const components: { title: string; href: string; description: string, icon: string }[] = [
    {
      title: "Blog & News ",
      href: "/blog",
      icon: "/lds.png",
      description:
        "Check Updates news",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      icon: "/lds.png",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      icon: "/lds.png",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      icon: "/lds.png",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      icon: "/lds.png",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      icon: "/lds.png",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]
  const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

  const links = [
    {
      route: "/customer",
      name: "Customer",
      badgeCount: 1,
    },
    {
      route: "/",
      name: "Changelog",
      badgeCount: 0,
    },
    {
      route: "/",
      name: "Help",
      badgeCount: 0,
    },
    {
      route: "/",
      name: "Careers",
      badgeCount: 4,
    },
    {
      route: "/",
      name: "Pricing",
      badgeCount: 0,
    },
  ];
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 mt-[5rem] md:mt-0">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-white/60 p-4 border-b backdrop-blur-sm">
        <div className="flex justify-between mx-4 items-center">
          <div className="flex items-center space-x-2 px-2 py-1 rounded-full">
            <Image src={'/lds.png'} width={30} height={30} alt="" className=" rounded-full border-[5px] border-green-600 animate-pulse"/>
            <div className="flex text-green-600 font-bold text-[14px]">
              Learning
              <p className="font-light text-black">
                Deck
              </p>
              <p className="font-light  text-gray-600 text-[9px]  ">
             v1.1
              </p>

            </div>
          </div>
          <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle() + `bg-red-600`}>
             Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden">
          <NavigationMenuTrigger className="bg-transparent">Set</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                  
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Software</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" gap-3 px-3 py-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
           
           <div className="flex items-center justify-between w-full hover:rounded hover:bg-gray-300/20 px-3">
           <div className="flex items-center">
    <AppWindow/>
              <ListItem href="/docs" className=" flex text-[10px] font-light">
              <div className="flex">
      LearningDeck Elearning Desktop  App           
              </div>
               </ListItem>
             </div>
                <div className="hidden  items-end text-white bg-green-600 border px-2 py-1 rounded-full text-[10px]">
                  new
                </div>
           </div>
              
           <div className="flex items-center justify-between hover:rounded hover:bg-gray-300/20 px-3">
           <div className="flex items-center">
           <Smartphone/>
           <ListItem href="/docs" className=" flex text-[10px] font-light">
              <div className="flex items-start">
      LearningDeck Elearning Mobile App           
              </div>
               </ListItem>
               </div>
             
                <div className="hidden  items-end text-white bg-green-600 border px-2 py-1 rounded-full text-[10px]">
                  new
                </div>
           </div>
           <div className="flex items-center justify-between w-full hover:rounded hover:bg-gray-300/20 px-3">
           <div className="flex items-center">
             <AppWindow/>
              <ListItem href="/docs" className=" flex text-[10px] font-light">
              <div className="flex">
      LearningDeck Exam Management  App           
              </div>
               </ListItem>
           </div>
   
             
                <div className="flex  items-end text-white bg-green-600 border px-2 py-1 rounded-full text-[10px]">
                  new
                </div>
           </div>
          
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">News & Updates</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            
              {components.map((component) => (
           
                <ListItem
                  key={component.title}
                  href={component.href}
                  className="flex space-x-2"
                >
                   <Newspaper width={15} height={15}/>
                
                </ListItem>
          
             
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
    
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Learn & Support</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/lds-schools" legacyBehavior passHref>
            <NavigationMenuLink className={cn( "bg-transparent",navigationMenuTriggerStyle())}>
             LearningDeck for Schools 
             
             <div className="flex ml-2  items-end text-white bg-yellow-600 border px-2 py-1 rounded-full text-[10px]">
                  Beta
                </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={cn( "bg-transparent",navigationMenuTriggerStyle())}>
             About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

          <div className="flex items-center gap-[20px] select-none">
          <Button variant={'outline'} className="rounded-full"> Sign in</Button>

            <Button className="rounded-full bg-green-600 hover:bg-green-500" > Start for free</Button>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-green-600 py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
        <div className="flex justify-between mx-4 items-center">
          <div className="flex items-center space-x-2 px-2 py-1 rounded-full">
            <Image src={'/lds.png'} width={30} height={30} alt="" className=" rounded-full border-[5px] border-green-600 animate-pulse"/>
            <div className="flex text-green-600 font-bold text-[14px]">
              Learning
              <p className="font-light text-black">
                Deck
              </p>
            </div>
            </div>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/menu.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <p
                    className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                  >
                    {item.name}
                  </p>
                  {item.badgeCount ? (
                    <div className="h-8 w-8 rounded-full bg-green-600 flex justify-center items-center  font-semibold text-white">
                      {item.badgeCount}
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              ))}

              <div className="flex flex-col gap-[20px] select-none">
              

                <Button className="">Start for free</Button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
