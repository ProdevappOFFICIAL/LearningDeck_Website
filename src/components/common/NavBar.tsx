"use client";

import { useState, useEffect } from "react";
import { X, ChevronDown, ChevronRight } from "lucide-react";
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
      icon: "/lds.jpg",
      description:
        "Check Updates news",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      icon: "/lds.jpg",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      icon: "/lds.jpg",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      icon: "/lds.jpg",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      icon: "/lds.jpg",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      icon: "/lds.jpg",
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
  const [showSoftwareSubmenu, setShowSoftwareSubmenu] = useState(false);
  
  const toggleMenu = () => {
    setMenu(!menu);
    if (!menu) {
      setShowSoftwareSubmenu(false);
    }
  };

  const toggleSoftwareSubmenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSoftwareSubmenu(!showSoftwareSubmenu);
  };

  // Function to scroll to bottom of page
  const scrollToBottom = (e: any) => {
    e.preventDefault();
    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.documentElement.scrollHeight-100,
      behavior: 'smooth'
    });
    // Close mobile menu if open
    if (menu) {
      setMenu(false);
    }
  };

  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20 mt-[5rem] md:mt-0">
      {/* DESKTOP */}
      <div className="hidden lg:block animate-in fade-in zoom-in bg-white p-4 border-b backdrop-blur-sm">
        <div className="flex justify-between mx-4 items-center">
          <div className="flex items-center space-x-2 px-2 py-1 rounded-full">
            <Image src={'/lds.jpg'} width={170}
                    height={180} alt="Logo" className="rounded-full bg-blend-multiply scale-95 bg-white px-2 py-[1px] border border-gray-700/20"
                    />
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + ` `}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                {/* Changed to scroll to bottom of page */}
                <a href="#" onClick={scrollToBottom}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + ` `}>
                    Features
                  </NavigationMenuLink>
                </a>
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
                  <ul className="gap-3 px-3 py-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                
          
                    <div className="flex items-center justify-between w-full hover:rounded hover:bg-gray-300/20 px-3">
                      <div className="flex items-center">
                        <Image width={20} height={20} alt="" src={'/lds_logo.png'}/>
                        <ListItem href="/docs" className="flex text-[10px] font-light">
                          <div className="flex">
                            LearningDeck Advanced CBT Manager           
                          </div>
                        </ListItem>
                      </div>
          
                    
                      <a href={'https://github.com/ProdevappOFFICIAL/LearningDeck-Advanced-CBT-Exam-Manager/releases/download/v1.0.1/learningdeck-1.0.0-setup.exe'}> 
                      <div className="flex items-end text-white bg-blue-600 border px-2 py-1 rounded-full text-[10px]">
                        download
                      </div>
                      </a>
                    </div>
                
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex">
                <Link href="/guide" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + ` `}>
                   How it works
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
                <NavigationMenuItem className="flex">
                <Link href="/guide" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + ` `}>
                   About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            <NavigationMenuItem className="flex">
                <Link href="/guide" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + ` `}>
                  FAQ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
          
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + ` `}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-[20px] select-none">
            <Button variant={'outline'} className="rounded-full">Sign in</Button>
            <Button className="rounded-full bg-blue-600 hover:bg-blue-500 text-white">Start for free</Button>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={`block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in ${
          menu ? "bg-gray-50 py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex justify-between mx-4 items-center">
            <div className="flex items-center space-x-2 px-2 py-1 rounded-full">
              <Image src={'/lds.jpg'} width={120}
                      height={120} alt="Logo" className="rounded-full bg-blend-multiply scale-95 bg-white px-2 py-[1px] border border-gray-700/20"
                      />
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black mr-4"
                onClick={toggleMenu}
              />
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer animate-in fade-in zoom-in mr-4"
                onClick={toggleMenu}
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </div>
        </div>
        {menu && (
          <div className="my-4 select-none animate-in slide-in-from-top">
            <div className="flex flex-col gap-4 mx-6">
              {/* Main navigation items matching desktop */}
              <Link href="/" onClick={() => setMenu(false)}>
                <div className="py-3 border-b border-gray-100 hover:bg-gray-100 px-2 rounded-md">
                  <p className="font-medium text-gray-800">Home</p>
                </div>
              </Link>

              <a href="#" onClick={scrollToBottom}>
                <div className="py-3 border-b border-gray-100 hover:bg-gray-100 px-2 rounded-md">
                  <p className="font-medium text-gray-800">Features</p>
                </div>
              </a>

              {/* Software dropdown */}
              <div>
                <a href="#" onClick={toggleSoftwareSubmenu}>
                  <div className="py-3 border-b border-gray-100 hover:bg-gray-100 px-2 rounded-md flex justify-between items-center">
                    <p className="font-medium text-gray-800">Software</p>
                    {showSoftwareSubmenu ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </div>
                </a>
                
                {showSoftwareSubmenu && (
                  <div className="ml-4 mt-2 bg-gray-50 rounded-md p-2">
                    <div className="flex items-center justify-between w-full hover:bg-gray-200 px-3 py-2 rounded-md">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 relative">
                          <Image fill={true} alt="" src={'/lds_logo.png'} className="object-contain" />
                        </div>
                        <div className="text-sm">
                          LearningDeck Advanced CBT Manager           
                        </div>
                      </div>
                        <a href={'https://github.com/ProdevappOFFICIAL/LearningDeck-Advanced-CBT-Exam-Manager/releases/download/v1.0.1/learningdeck-1.0.0-setup.exe'}> 
                      <div className="flex items-end text-white bg-blue-600 border px-2 py-1 rounded-full text-xs">
                        download
                      </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/guide" onClick={() => setMenu(false)}>
                <div className="py-3 border-b border-gray-100 hover:bg-gray-100 px-2 rounded-md">
                  <p className="font-medium text-gray-800">Guide</p>
                </div>
              </Link>

              {/* Authentication buttons */}
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" className="rounded-full w-full">Sign in</Button>
                <Button className="rounded-full bg-blue-600 hover:bg-blue-500 w-full">Start for free</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;