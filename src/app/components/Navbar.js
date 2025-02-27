
'use client'

import React, { useState, useEffect } from "react";
import logo from "../../../public/XploreHub.png";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const [active, setActive] = useState("home");

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 2000;
      setIsScrolled(show);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const routes = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/about", id: "about" },
    { name: "Blog", href: "/blog", id: "blog" },
    { name: "Team", href: "/team", id: "team" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];
  
  return (
    <div>
      {!showNav&&<div className="h-full fixed left-0 right-0 top-0 opacity-20 bg-black"></div>}

      
      
      <nav
        className={
          isScrolled
            ? "z-10 hidden md:flex md:items-center md:justify-between md:px-2 py-3 md:fixed left-0 right-0 bg-white shadow duration-[300ms] text-white md:gap-5 lg:gap-0 lg:px-20"
            : "hidden md:flex bg-white md:items-center md:justify-between md:px-2 py-3 shadow-lg duration-[300ms] md:gap-5 lg:gap-0 lg:px-20 lg:py-5"
        }>
        <Link href="/">
        <Image src={logo} alt="logo" className=" h-auto" />

          {/* Adjust size if needed */}
        </Link>

        <ul className="flex gap-6 md:items-center md:justify-between">
  {routes.map((route) => (
    <li key={route.id}>
      <Link
        href={route.href}
        className={
          active === route.id
            ? "text-[#057A51] font-bold"
            : "text-[#9CA3AF] semi-bold"
        }
        onClick={() => setActive(route.id)}
      >
        {route.name}
      </Link>
    </li>
  ))}
</ul>

        <div>
          <Link href="/about">
            <button className="bg-[#057A51] rounded-full text-white px-6 py-2 font-bold hover:bg-white hover:text-[#057A51] hover:px-5 hover:border border-[#057A51] transition duration-300">
             SIgn Up
            </button>
          </Link>
        </div>
      </nav>

    
      <div
  className={
    showNav
      ? "z-50 px-4 py-4 my-3 gap-4 bg-white h-full  md:hidden"
      : "z-50 px-4 py-4 my-3 gap-4  h-full bg-black md:hidden"
  }>
  <nav className="flex items-center justify-between">
    <Link href="/">
    <Image src={logo} alt="logo" className=" h-auto" />

    </Link>
    {showNav ? (
      <div
        className="grid gap-1"
        onClick={() => {
          toggleNav();
        }}>
        <div className="h-1 w-5 bg-black"></div>
        <div className="h-1 w-6 bg-black"></div>
        <div className="h-1 w-6 bg-black"></div>
      </div>
    ) : (
      ""
    )}
    {showNav ? (
      ""
    ) : (
      <div
        className="font-bold text-3xl text-white z-20"
        onClick={() => {
          toggleNav();
        }}>
        x
      </div>
    )}
  </nav>
  <ul
  className={
    showNav
      ? "grid gap-6 md:items-center py-4 text-white  px-6 absolute right-0 left-[-490px] h-auto duration-[300ms]"
      : "grid gap-6 md:items-center py-10 text-white bg-[#057a51] px-8 absolute right-0 left-0 top-[-16px] h-auto duration-[300ms] z-10"
  }>

{routes.map((route) => (
    <li key={route.id}>
      <Link
        href={route.href}
        className={
          active === route.id
            ? "text-white font-bold"
            : " font-bold text-gray-200"
        }
        onClick={() => setActive(route.id)}
      >
        {route.name}
      </Link>
    </li>
  ))}

  
    <li>
      <Link href="#get-started">
        <button className="bg-white rounded text-black px-6 py-2 font-bold hover:bg-black transition duration-300 hover:text-white">
          Get Started
        </button>
      </Link>
    </li>
  </ul>
</div>

    </div>
  );
};
export default NavBar;