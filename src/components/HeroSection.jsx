import techIllustration from "../assets/support.svg"

const Hero = () => {
  return (
    <div className="md:flex justify-center md:gap-7">
      <div className="md:mt-5">
        <h1 className="font-grotesk font-bold text-2xl min-w-min">Join Our Community Today To Become A Techbuff You Have Always Aspired</h1>
        <p className="text-sm font-thin my-5">Join Us Today To Embark On A Path Towards Becoming A Technophile You.</p>
        <button className="bg-red-400 hover:bg-red-500 active:bg-red-600 text-white md:py-3 md:px-5 md:mr-5 mr-2 rounded-md border p-2 cursor-pointer">Contact Us</button>
        <button className="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-red-400 p-2 md:py-3 md:px-5 rounded-md border cursor-pointer">Join Classes</button>
      </div>
    {/* <img src="https://uidoor.com/wp-content/uploads/edd/2023/09/Hero-Section-01.png" alt="community frame" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-1 content-center">
        <img className="border rounded-md md:h-auto md:w-[20rem] object-contain mt-3" src="https://res.cloudinary.com/dtnzacucq/image/upload/v1729061421/66bb67262eb960429907bcc4_669648a0617685b3acb61cc2_Best-tech-stack-for-software-development_e12y6r.png" alt="tech image" />
        <img className="border rounded-md md:h-auto md:w-52 object-contain p-1" src={techIllustration} alt="tech image" />
        <img className="border rounded-e-full md:h-auto md:w-52 object-contain p-1" src="https://res.cloudinary.com/dtnzacucq/image/upload/v1729061309/billboard_phvxhy.png" alt="tech image" />
        <img className="border rounded-md md:h-auto md:w-52 object-contain p-1" src="https://res.cloudinary.com/dtnzacucq/image/upload/v1729061274/tech-future-careers---carousel2_bmwqgb.png" alt="tech image" />
      </div>
    </div>
  );
};

export default Hero;