"use client"
import React, { useState } from "react"

import { FaBars, FaRegCommentDots, FaRegUserCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { BsChevronCompactLeft } from "react-icons/bs";

import Button from "./Button";
import Image from "next/image";

import "./components.css"

interface UserLayoutProps {
  children: React.ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
  const [navShow, setNavShow] = useState<boolean>(false);

  return (<>
    <header className="flex flex-row justify-between 
      items-center p-1 fixed w-full bg-background h-18
      border-solid border-b-1 border-foreground z-50">
      <div className="flex flex-row">
        <Button onClick={() => setNavShow(x => !x)}
          className="md:hidden">
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
    <aside
      className={`
      border-r-1 pt-18 border-solid border-foreground 
      h-full fixed z-40 bg-background duration-500 md:w-96 w-full
      ${navShow ? "translate-x-0" : "md:[transform:translateX(calc(-100%+3em))] [transform:translateX(-100%)]"}`}>
      <Button onClick={() => setNavShow((x) => (!x))}
        className="absolute hidden md:block bg-background
        border-1 border-solid border-foreground flex items-center justify-center
        top-30 right-0 translate-x-1/2">
        { !navShow && <FaBars className="h-5 w-5"/> }
        { navShow && <BsChevronCompactLeft className="h-5 w-5"/>}
      </Button>
    </aside>
    <main className="pt-25 pl-15 relative z-10">
      {children}
    </main>
  </>)
}