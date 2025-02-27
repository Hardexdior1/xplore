
'use client'

import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import travelInspiration from "../data/TravelInspiration"
import adventureTrips from "../data/AdventureTrips"
import { useParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Page = () => {
  const { id} = useParams();

  const adventures=[...travelInspiration,...adventureTrips]
  const adventure = adventures.find((trip) => trip.id === parseInt(id));

  if (!adventure) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-20">
              <ToastContainer />

      {/* Image and trip details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image src={adventure.img} alt={adventure.title} className="w-full rounded-lg" />
        <div>
          <h1 className="text-2xl font-bold">{adventure.title}</h1>
          <p className="text-gray-600 mt-2">{adventure.description}</p>
          <div className="flex items-center gap-2 mt-4">
            <FaLocationDot className="text-[#057A51]" />
            <p className="text-lg">{adventure.location}</p>
          </div>
          <p className="text-lg mt-2">Duration: {adventure.duration? adventure.duration:"3 days"}</p>

          <p className="text-xl font-semibold text-[#057A51] mt-2">Price: {adventure.price}</p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="mt-8 p-6 mb-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Book This Adventure</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-md" />
          <input type="email" placeholder="Email Address" className="w-full p-2 border rounded-md" />
          <input type="number" placeholder="Number of Travelers" className="w-full p-2 border rounded-md" />
          <textarea placeholder="Additional Notes" className="w-full p-2 border rounded-md"></textarea>
          <button className="bg-[#057A51] text-white px-4 py-2 rounded-md w-full" onClick={(()=>{
                toast.success("Your message has been sent successfully!");

          })}>
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
