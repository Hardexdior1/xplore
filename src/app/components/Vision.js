"use client";
import React from "react";
import Image from "next/image";
import office from "../../../public/officecleaning.png";
import toilet from "../../../public/toiletcleaning.png";
import laundry from "../../../public/laindrycleaning.png";

const Vision = () => {
 

  // metamask1help@gmail.com
  // Daily2024

  const cleanings = [
    {
      name: "Office Cleaning",
      img: office,
      text: "Awesome  site. on the top advertising a business online includes assembling Having the most keep.",
    },
    {
      img: toilet,
      name: "Toilet Cleaning",
      text: "Awesome  site. on the top advertising a business online includes assembling Having the most keep.",
    },
    {
      img: laundry,
      name: "Laundry Cleaning",
      text: "Awesome  site. on the top advertising a business online includes assembling Having the most keep.",
    },
  ];

  return (
    <section className="grid gap-10 mt-4">
      <div className="flex flex-col gap-4 justify-center items-center text-center  m-auto md:w-3/5">
        <h2 className="font-bold mb-3">
          Discover Our Latest Cleaning Projects
        </h2>
        <p>
          Transforming spaces with care and precision. From spotless homes to
          sparkling offices, we ensure every corner shines.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cleanings.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow-md p-5 rounded-lg border transition hover:bg-[#4977E5] group text-white transition">
              <Image src={item.img} alt={item.name} />
              <h5 className="font-bold text-black mt-3 group-hover:text-white">
                {" "}
                {item.name}{" "}
              </h5>{" "}
              <p className="text-base group-hover:text-white"> {item.text} </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Vision;




// "use client";
// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
// import { useEffect, useState, useRef } from "react";
// import { useAuth } from "@/context/AuthContext";

// export default function Chat({ children }) {
//     const { user } = useAuth();
//   const tawkMessengerRef = useRef();

//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);
  
//   const onTawkLoad = () => {

//     if (window.Tawk_API) {
//       const userName = `${user?.firstname} ${user?.lastname}` || "Guest";
//       const userEmail = user?.email || "guest@example.com";
//       const userPhone = user?.phoneNumber || "N/A";

//       window.Tawk_API.setAttributes(
//         {
//           name: userName,
//           email: userEmail,
//           phone: userPhone,
//         //   jobTitle: "Parent",
//         },
//         function (error) {
//           if (error) {
//             console.error("Error setting Tawk.to user details:", error);
//           } else {
            
//           }
//         }
//       );
//     } else {
//       console.error("Tawk_API is not available");
//     }
//   };

//   const handleMinimize = () => {
//     if (tawkMessengerRef.current) {
//       tawkMessengerRef.current.minimize();
//     }
//   };

//   return (
//     <div>
//       {children}
//       {isClient && (
//         <TawkMessengerReact
//           propertyId="66f6ce03e5982d6c7bb5af5b"
//           widgetId="1i8q19ftr"
//           ref={tawkMessengerRef}
//           onLoad={onTawkLoad}
//         />
//       )}

//       {/* <button onClick={handleMinimize}>Minimize the Chat</button> */}
//     </div>
//   );
// }
