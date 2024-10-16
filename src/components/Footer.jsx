import {  FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    
  <footer className="bg-gray-800 text-white py-12 ">
    <div className="container mx-auto">
    <h1 className="text 4xl font-bold text-center">GMC</h1>
      </div>


    <div className="flex flex-wrap justify-between items-center mb-12">
          {/* Contact */}
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <div className="flex flex-col items-center">
              <p>Call these Numbers: 09079474822, 00122485859, 09122233344</p>
            </div>
          </div>



          {/* Email*/}
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <div className="flex flex-col items-center">
              <p>GMC@gmail.com</p>
            </div>
          </div>



          {/* Location Info */}
          <div className="w-full md:w-1/3 text-center">
            <div className="flex flex-col items-center">
              <p>20 St.Peterson Street, New Garage, Lagos, Nigeria</p>
            </div>
          </div>
        </div>

         {/* Footer Text */}
        <p className="text-center text-gray-400">This is a Footer section</p>
      
      {/*Copyright*/}
        <div className="container mx-auto text-center text-gray-500 text-sm">
    <p>Copyright ©2024 All rights reserved.</p>
    <div className="mt-4">

<div className="flex justify-around">
      <FacebookLogo size={20} color="#2E86AB"/>
      <XLogo size={20} color="black"/>
      <InstagramLogo size={20} color="pink"/>


  </div>
    </div>
  </div>


    
  </footer>
  );
};

export default Footer;