import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-gray-200 py-4">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="mb-4 md:mb-0">
          <Image src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="mb-4 flex flex-wrap justify-center md:mb-0 md:justify-start"></div>
        <div>
          <p className="mt-2 text-sm text-gray-500 md:mt-0">
            &copy; {currYear} EstatePro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
