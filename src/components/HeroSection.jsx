//import React from 'react'

const Hero = () => {
  return (
    <div className="flex justify-center items-center p-12">
      <div>
        <h1 className="font-grotesk font-bold text-2xl">Join Our Community Today To Become A Techbuff You Have Always Aspired</h1>
        <p className="text-sm">Join Us Today To Embark On A Path Towards Becoming A Technophile You.</p>
        <button className="bg-red-400 hover:bg-red-500 active:bg-red-600 text-white py-5 px-8 mr-10 rounded-md border">Contact Us</button>
        <button className="bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-red-400 py-5 px-8 rounded-md border">Join Classes</button>
      </div>
    {/* <img src="https://uidoor.com/wp-content/uploads/edd/2023/09/Hero-Section-01.png" alt="community frame" /> */}
      <div className="flex">
        <img className="border rounded-md max-w-36" src="https://res.cloudinary.com/dtnzacucq/image/upload/v1729061421/66bb67262eb960429907bcc4_669648a0617685b3acb61cc2_Best-tech-stack-for-software-development_e12y6r.png" alt="tech image" />
        <img className="border rounded-md max-w-36" src="https://res.cloudinary.com/dtnzacucq/image/upload/v1729061338/10859214_gbweik.png" alt="tech image" />
        <img className="border rounded-full max-w-36" src="https://res.cloudinary.com/dtnzacucq/image/upload/v1729061309/billboard_phvxhy.png" alt="tech image" />
        <img className="border rounded-md max-w-36" src="https://res.cloudinary.com/dtnzacucq/image/upload/v1729061274/tech-future-careers---carousel2_bmwqgb.png" alt="tech image" />
      </div>
    </div>
  );
};

export default Hero;