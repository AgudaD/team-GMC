import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import { useState, useEffect } from "react";
import { X } from "@phosphor-icons/react"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [toggle]);
 
  return (
    <div className="flex items-center justify-between text-white bg-slate-950 font-grotesk px-12 py-6">
      <img src={logo} alt="" className="w-24" />
      

      <ul className="hidden md:flex items-center justify-center gap-8 text-lg">
        <Link to={"/"}>
            <li>Home</li>
        </Link>
        <Link to={"about"}>
            <li>About</li>
        </Link>
        <Link to={"organizations"}>
            <li>Organizations</li>
        </Link>
      </ul>

      {/* mobile nav */}
      <div className="md:hidden">
        {/* burger menu */}
        <div className="space-y-1 flex flex-col items-end" onClick={handleToggle}>
          <div className="bg-gray-100 h-1 w-6 rounded-sm"></div>
          <div className="bg-gray-100 h-1 w-4 rounded-sm"></div>
          <div className="bg-gray-100 h-1 w-5 rounded-sm"></div>
        </div>

        {/* nav pages */}
        <ul className={`bg-blue-950 flex flex-col items-center justify-center space-y-12 text-lg h-screen w-[50%] fixed top-0 right-0 rounded-l-md shadow-lg transform transition-transform duration-500 ${toggle ? "translate-x-0" : "translate-x-full"}`}>
          <X size={24} className="absolute top-5 right-5" onClick={() => setToggle(false)} />
        <Link to={"/"}>
            <li>Home</li>
        </Link>
        <Link to={"about"}>
            <li>About</li>
        </Link>
        <Link to={"organizations"}>
            <li>Organizations</li>
        </Link>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
