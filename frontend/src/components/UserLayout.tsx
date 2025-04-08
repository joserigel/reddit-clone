import React from "react"
import { FaBars, FaRegCommentDots, FaRegUserCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import Button from "./Button";
import Image from "next/image";

import "./components.css"

interface UserLayoutProps {
  children: React.ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (<>
    <header className="flex flex-row justify-between 
      items-center p-1 fixed w-full bg-background h-18
      border-solid border-b-1 border-foreground z-50">
      <div className="flex flex-row">
        <Button className="md:hidden">
          <FaBars className="h-7 w-7"/>
        </Button>
        <Button noHover className="flex flex-row gap-2">
          <Image src={"/logo.png"} alt="logo"
            height={40} width={40}/>
            <h1 className="font-bold text-2xl">Reddot</h1>
        </Button>
      </div>
      <div>
      </div>
      <div className="flex flex-row">
        <Button>
          <FaRegCommentDots className="h-7 w-7"/>
        </Button>
        <Button className="flex gap-1">
          <FiPlus className="h-7 w-7"/>
          <h1 className="text-lg">Create</h1>
        </Button>
        <Button>
          <FaRegUserCircle className="h-7 w-7"/>
        </Button>
      </div>
    </header>
    <aside className="border-1 md:min-w-10 pt-18 border-solid border-foreground h-full fixed">
      <Button
        className="absolute hidden md:block bg-background 
        border-1 border-solid border-foreground flex items-center justify-center
        top-30 right-0 translate-x-1/2">
        <FaBars className="h-5 w-5"/>
      </Button>
    </aside>
    <main className="pt-25   pl-15 relative">
      {children}
    </main>
  </>)
}