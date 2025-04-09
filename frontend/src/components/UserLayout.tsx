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
      items-center p-1 fixed w-full bg-background h-14
      border-solid border-b-1 border-accent z-50">
      <div className="flex flex-row">
        <Button onClick={() => setNavShow(x => !x)}
          className="md:hidden">
          <div className=" flex justify-center items-center h-7 w-7">
            <FaBars size={20}/>
          </div>
        </Button>
        <Button noHover className="w-max px-3 gap-3">
          <Image src={"/logo.png"} alt="logo"
            height={30} width={30}/>
          <h1 className="font-bold text-lg hidden md:block">Reddot</h1>
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
          <h1 className="text-lg pr-3">Create</h1>
        </Button>
        <Button>
          <FaRegUserCircle className="h-7 w-7"/>
        </Button>
      </div>
    </header>
    <aside
      className={`
      border-r-1 pt-18 border-solid border-accent 
      h-full fixed z-40 bg-background duration-500 md:w-96 w-full
      ${navShow ? "translate-x-0" : "md:[transform:translateX(calc(-100%+3em))] [transform:translateX(-100%)]"}`}>
      <Button onClick={() => setNavShow((x) => (!x))}
        className="absolute hidden md:block bg-background
        border-1 border-solid border-accent flex items-center justify-center
        top-30 right-0 translate-x-1/2">
          { !navShow && <FaBars className="h-5 w-5"/> }
          { navShow && <BsChevronCompactLeft className="h-5 w-5"/>}
      </Button>
      <div className="flex flex-col pt-3 px-10">
        <h1 className="text-md text-accent my-2">COMMUNITIES</h1>
        <ul>
          <li className="flex flex-row items-center gap-3 hover:bg-tertiary p-2 cursor-pointer">
            <FiPlus size={20}/><span className="text-md">Create a Community</span>
          </li>
        </ul>
        
      </div>
    </aside>
    <main className="pt-25 pl-15 relative z-10">
      {children}
    </main>
  </>)
}