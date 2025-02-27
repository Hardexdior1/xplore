"use client";
import Image from "next/image";
import Link from "next/link";
import hero from "../../public/hero-img.png"
import { CiSearch } from "react-icons/ci";
import viator from "../../public/viator.png"
import booking from "../../public/booking.png"
import klook from "../../public/klook.png"
import trivago from "../../public/trivago.png"
import pedia from "../../public/pedia.png"

import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import thrills1 from "../../public/thrills1.png"
import thrills2 from "../../public/thrills2.png"
import rev1 from "../../public/rev1.png"
import rev2 from "../../public/rev2.png"
import rev3 from "../../public/rev3.png"
import rev4 from "../../public/rev4.png"


import travelInspiration from './data/TravelInspiration'
import adventureTrips from "./data/AdventureTrips"
export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the component comes into view
    threshold: 0.2, // Trigger when 20% of the element is visible
  });
  
  
  
  const category=["Hot Deal 🔥","Extreme Thrills 🪂","Aqua Adventures 🌊","Mountains & Trekking ⛰️","More ..."]
  const [activeCategory,setActiveCategory]=useState("Hot Deal 🔥")
  // const category = new Set(['All', ...adventureTrips.map((item) => item.category)]);

  console.log(activeCategory)

  const toggleCategory=(item)=>{
    setActiveCategory(item)
  }
  const reviews = [
    {
      id: 1,
      name: "Williams Perry",
      position: "CEO & Founder",
      review:
        "I'm turning a passion for adventure into epic experiences. With years of exploration and expertise, I'm dedicated to crafting thrilling and unforgettable journeys for every adventurer.",
      image: rev1,

    },
    {
      id: 2,
      name: "Adam Benson",
      position: "CEO & Founder",
      review:
        "I'm turning a passion for adventure into epic experiences. With years of exploration and expertise, I'm dedicated to crafting thrilling and unforgettable journeys for every adventurer.",
      image: rev2,
    },
    {
      id: 3,
      name: "Saga Albert",
      position: "CEO & Founder",
      review:
        "This was hands down the most thrilling experience of my life! From scaling rugged peaks to diving into crystal-clear waters, every moment was pure adrenaline. I can't wait for my next expedition.",
        image: rev3,

    },
    {
      id: 4,
      name: "Sandra Brenard",
      position: "CEO & Founder",
      review:
        "I'm turning a passion for adventure into epic experiences. With years of exploration and expertise, I'm dedicated to crafting thrilling and unforgettable journeys for every adventurer.",
      image: rev4,

    },
  ];
  
 
  
  
  
  
  return (
    <main className="grid gap-14 md:gap-24">

{/* hero section */}
     <div>
     <section className="container  my-6 grid gap-6 items-center   md:grid-cols-2 ">
        <div className="flex flex-col gap-5 bg-white">
          <h1 className="">Make Memories That Last  a Lifetime</h1>

          <p>From sky-high thrills to deep-sea adventures, discover and book unforgettable experiences worldwide.</p>

          <div       className="border w-full py-3 pl-3 pr-3 mt-3 rounded-full bg-white flex items-center justify-between">
            <div className="grid grid-cols-3 gap-3">
            {/* <select name="" id="" className="text-xs sm:text-base">
  <option value="" className="text-[#7E7C7C]">Active Type</option>
</select>
<select name="" id="" className="text-xs sm:text-base">
  <option value="" className="text-[#7E7C7C]">Season</option>
</select>
<select name="" id="" className="text-xs sm:text-base">
  <option value="" className="text-[#7E7C7C]">Group Size</option>
</select> */}
<select name="activeType" id="activeType" className="text-xs sm:text-base" defaultValue="">
  <option value="" disabled className="text-[#7E7C7C]">Active Type</option>
  <option value="adventure">Adventure</option>
  <option value="relaxation">Relaxation</option>
  <option value="cultural">Cultural</option>
  <option value="wildlife">Wildlife</option>
  <option value="cruise">Cruise</option>
</select>

<select name="season" id="season" className="text-xs sm:text-base" defaultValue="">
  <option value="" disabled className="text-[#7E7C7C]">Season</option>
  <option value="summer">Summer</option>
  <option value="winter">Winter</option>
  <option value="spring">Spring</option>
  <option value="autumn">Autumn</option>
  <option value="all-year">All Year</option>
</select>

<select name="groupSize" id="groupSize" className="text-xs sm:text-base" defaultValue="">
  <option value="" disabled className="text-[#7E7C7C]">Group Size</option>
  <option value="1-5">1 - 5 People</option>
  <option value="6-10">6 - 10 People</option>
  <option value="11-20">11 - 20 People</option>
  <option value="21+">21+ People</option>
</select>



            </div>
          
   <div className="bg-[#057A51] rounded-full p-1">
   <CiSearch size={30} className="cursor-pointer text-white"/>
   </div>

   </div>
        </div>

        <div > 

          <Image src={hero} alt="man-and-woman-sky-diving" className=" object-cover" />
        </div>
        <div>
        
        </div>

      </section>

      <section className="container flex items-center justify-center gap-8 mt-5"> 
       <div > 

          <Image src={viator} alt="viator-logo" className="w-24 h-auto"  />
        </div>
         <div> 

          <Image src={booking} alt="booking-logo"  />
        </div>
         <div> 

          <Image src={klook} alt="klook-logo" />
        </div>
         <div> 

          <Image src={trivago} alt="trivago-logo" />
        </div>
         <div> 

          <Image src={pedia} alt="pedia-logo" />
        </div>
        </section>
     </div>


{/* package */}

     <section className="container flex flex-col gap-8">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h5 className="text-[#057A51] font-semibold text-center"> BEST PACKAGE </h5>
        <h2 className="text-black font-semibold text-center">Find Your Next Adrenaline Rush</h2>
      </div>

      <div className="hidden md:flex justify-center items-center px-4">
    <div className="grid grid-cols-5 items-center gap-3 min-w-[600px]">
      {category.map((item, index) => (
        <div
          key={index}
          className={`text-center py-1 inline-block ${
            item !== "More ..." ? "border-r-4 border-[#7E7C7C]" : "border-r-4 border-[#ffffff]"
          }`}
        >
          <h5
            className={`font-semibold cursor-pointer ${
              activeCategory === item ? "text-[#057A51]" : "text-[#7E7C7C]"
            }`}
            onClick={() => toggleCategory(item)}
          >
            {item}
          </h5>
        </div>
      ))}
  </div>
</div>

{/*     
     <div className="grid grid-cols-5 items-center gap-3 justify-center">
     { category.map((item,index)=>{
        return <div key={index} className={`text-center py-1 inline-block ${item!=="More ..."?`border-r-4 border-[#7E7C7C]`:`border-r-4 border-[#ffffff`}` }>
          <h5 className={`font-semibold cursor-pointer ${activeCategory==item?` text-[#057A51]`:`text-[#7E7C7C]`}`} onClick={(()=>{
            toggleCategory(item)
          })}> {item} </h5>
        </div>
        
      })}
     </div> */}
<div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
{adventureTrips.map((item,index)=>{
  return<div key={index} className="shadow rounded-tr-lg rounded-tl-lg rounded-bl rounded-br pb-5">
    <Image src={item.img} alt={item.category} className="w-full" />
    <div className="flex items-center justify-between mt-3 px-2">
      <p className="text-base "> {item.duration} </p>
      <p className="text-[#057A51] text-base "> {item.price} </p>
    </div>
    <h4 className="text-black font-semibold mb-4 mt-2 px-2"> {item.title} </h4>

    <div className="flex items-center justify-between mt-3 px-2">
     <div className="flex items-center gap-2"> <FaLocationDot className="text-[#057A51]  "  /> <p className="text-base"> {item.location} </p></div>
     <Link href={`/${item.id}`}>      <button className="bg-[#057A51] text-base text-white  px-2 py-1 rounded-full text-sm"> Explore More </button>
     </Link>
    </div>
    

    
  </div>
})}
</div>



     </section>

     {/* why choose us */}

     <section className=" bg-[#fafafa]">
      <div className="container  my-6 grid gap-6 items-center   md:grid-cols-2">
        <div className="flex flex-col gap-5">
        <h5 className="text-[#057A51] font-semibold ">WHY CHOOSE US</h5>
        <h2 className="text-black font-semibold">Your Next Thrills, Backed by Our Expertise</h2>
<p>We don’t just plan trips- we create unforgettable experiences. Whether you’re scaling mountains, diving into the deep blue or trekking through the wild, we ensure every adventure is thrilling</p>
<Link href={'/'}>      <button className="bg-[#057A51] text-base text-white  px-3 py-2 rounded-full text-sm md:mb-3"> Read More </button>
</Link>


<div
      ref={ref}
      className="grid grid-cols-3 gap-6 md:flex items-center justify-between">
      <div>
        <div className="flex gap-1 items-center text-[#057A51]">
          {inView && (
            <CountUp
            className="text-2xl font-semibold md:text-4xl"
              start={0}
              end={232}
              duration={2}
              delay={0}
            />
          )}
        </div>
        <p >Thrilled Adventurers</p>
      </div>
      <div>
        <div className="flex gap-1 items-center text-[#057A51]">
          {inView && (
            <CountUp
            className="text-2xl font-semibold md:text-4xl"

              start={0}
              end={125}
              duration={2}
              delay={0}
            />
          )}
          <span className="text-2xl md:text-4xl"> + </span>
        </div>
        <p> Handpicked Destinations</p>
      </div>

      <div>
        <div className="flex gap-1 items-center text-[#057A51]">
          {inView && (
            <CountUp
            className="text-2xl font-semibold md:text-4xl"

              start={0}
              end={150}
              duration={2}
              delay={0}
            />
          )}
        </div>
        <p>Miles of Exploration </p>
      </div>

    

    </div>
        </div>


     
       <div className="grid gap-2 md:grid-cols-2">
  {/* First Card */}
  <div className="shadow bg-[#AEA190] text-white rounded-lg pb-3 hidden md:block ">
    <div className="max-h-[340px] overflow-hidden ">
      <Image src={thrills1} alt="man-on-a-mountain" className="w-full h-full object-cover" />
    </div>
    <h5 className=" mt-2 px-3 font-semibold">Breathtaking Height</h5>
    <span className="text-sm text-white px-3 flex items-center gap-1 "> <IoMdStar className="text-[#FFB107] text-lg" /> 4.0 (3,345 Reviews)</span>    
  </div>

  {/* Second Card */}
  <div className="shadow bg-[#AEA190] text-white rounded-lg pb-3 ">
    <div className="h-[340px] overflow-hidden">
      <Image src={thrills2} alt="golden-sand" className="w-full h-full object-cover" />
    </div>
    <h5 className=" mt-2 px-3 font-semibold">Golden Sand, Endless Waves</h5>
    <span className="text-sm text-white px-3 flex items-center gap-1 "> <IoMdStar className="text-[#FFB107] text-lg" /> 3.2 (1,547 Reviews)</span>    
  </div>
</div>


{/* 
<div className="grid grid-cols-2 gap-2 md:hidden">
  <div className="shadow bg-[#AEA190] text-white rounded-lg pb-3 ">
    <div className="md:max-h-[340px] overflow-hidden">
      <Image src={thrills1} alt="man-on-a-mountain" className="w-full h-full object-cover" />
    </div>
    <h5 className=" mt-2 px-3 font-semibold text-sm">Breathtaking Height</h5>
    <span className="text-sm text-white px-3 flex items-center gap-1 "> <IoMdStar className="text-[#FFB107] text-lg" /> 4.0 (3,345 Reviews)</span>    
  </div>

  <div className="shadow bg-[#AEA190] text-white rounded-lg pb-3 ">
    <div className="md:max-h-[340px] overflow-hidden">
      <Image src={thrills2} alt="golden-sand" className="w-full h-full object-cover" />
    </div>
    <h5 className=" mt-2 px-3 font-semibold text-sm">Golden Sand, Endless Waves</h5>
    <span className="text-sm text-white px-3 flex items-center gap-1 "> <IoMdStar className="text-[#FFB107] text-lg" /> 3.2 (1,547 Reviews)</span>    
  </div>
</div> */}



      </div>


     </section>



     {/* bg-[#AEA190] */}
     {/* epic spot */}
     <section className="container  bg-[#fff]">
      <div className=" my-6 grid gap-6 items-center   md:grid-cols-2">
        <div className="flex flex-col gap-3">
        <h5 className="text-[#057A51] font-semibold ">THRILLS LOCATIONS</h5>
        <h2 className="text-black font-semibold">Epic Spots for Your <br /> Next Thrill </h2>
        {/* <h2 className="text-black font-semibold"> </h2> */}




        </div>
        <div>
        <p>
        The world is full of thrilling landscapes waiting to be explored! We’ve handpicked the best adventure spots for your next adrenaline rush.
          </p>

        </div>


     
      



      </div>
      <div className="grid md:grid-cols-4 gap-6">
      {travelInspiration.map((item, index) => (
        <Link href={`/${item.id}`} key={index}>
        <div  className="bg-white flex flex-col gap-4 text-white">
          

          <div className=" text-white rounded-lg ">
    <div className="md:max-h-[320px] overflow-hidden bg-[#AEA190]">
      <Image src={item.img} alt={item.alt} className="w-full h-full object-cover" />
    </div>
   <div className="flex items-center justify-between px-3 py-2 rounded-br-lg rounded-bl-lg bg-[#AEA190]">
   <span className="text-sm text-black flex items-center gap-1"><IoMdStar className="text-[#FFB107] text-lg" /> {item.reviews}</span>  
   <h5 className="font-semibold  text-sm text-[#057A51]">{item.price}</h5>
   </div>
     
  </div>
  <div>
    <h4 className="text-black font">{item.title}</h4>
  </div>
          
        </div>
        </Link>
      ))}
    </div>


     </section>

     {/* what una adventurers say */}

     <section className="container grid gap-6 items-center ">
        <div className="flex flex-col gap-2 items-center justify-center">
        <h5 className="text-[#057A51] font-semibold ">T EST I M O N I A L S </h5>
        <h2 className="text-black font-semibold">What Our Adventurers Say </h2>
<p>Turning Every Expendition into a Story Worth Telling</p>

  </div>

  <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {reviews.map(({ id, name, position, review, image }) => (
        <div
          key={id}
          className="bg-white shadow-md rounded-lg py-4 px-2 text-center border"
        >
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <Image
              src={image}
              alt={name}
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="">{position}</p>
          <p className="">{review}</p>
        </div>
      ))}
    </div>
  

</section>

<section className="container mb-20">
      <div className="bg-[#057A51] text-white text-center py-5 rounded-lg">
      <h2>

          Gear Up and Embark on the 
        </h2>
        <h2>

           Ultimate Adventure
        </h2>
        <p className="text-white text-base mt-2">
          Epic Deals for Your Next Adventure
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-[#057A51] font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
          Start Exploring
        </button>
      </div>
    </section>

      
     

    </main>
  );
}
