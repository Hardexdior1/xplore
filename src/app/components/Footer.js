import React from "react";
import Image from "next/image";
// import logo from "../../../public/logo-white.png";
import logo from "../../../public/xpedia.png";

const Footer = () => {
  const footerData = [
    {
      title: "Company",
      links: ["Blogs", "How it works", "Terms", "Privacy policy"],
    },
    {
      title: "About us",
      links: ["Who we are", "Feature", "News settler", "Career"],
    },
    {
      title: "Services",
      links: ["Flight booking", "Make tour plan", "Arrange tour", "Hotel booking"],
    },
    {
      title: "Contact Us",
      links: ["📞 (91) 98765 4321 54", "✉️ support@mail.com"],
    },
  ];

  return (
    <footer >
      

      {/* footer */}
      

      <div className=" bg-[#057A51] pt-10">
        <footer className="container grid gap-6 md:grid-cols-5">
          <div className="md:col-span-1">
            <Image src={logo} alt="logo" className="mb-3" />

            <p className="text-sm text-white">
            We’re more than travel-we’re adventure, exploration, and unforgettable experiences
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:col-span-4">
            {footerData.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold mb-4 text-white">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i} className="text-sm text-white">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </footer>

        <div className="container mt-5 mb-5 py-5 border-t flex flex-col gap-4 md:flex-row items-center justify-center ">
          <div>
            <p className="text-sm text-white font-semibold">
              {" "}
              &copy; {new Date().getFullYear()} xplorehub all right reserved
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
