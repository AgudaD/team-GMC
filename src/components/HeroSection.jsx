//import React from 'react'
import Button from './Button.jsx';

const Hero = () => {
  return (
    <div className="md:flex justify-center md:space-x-24">
      <div className="md:mt-5 w-3/5">
        <h1 className="font-grotesk font-bold text-2xl min-w-min">Join Our Community Today To Become A Techbuff You Have Always Aspired</h1>
        <p className="text-sm font-thin my-5 max-w-3xl">
          Join Us Today To Embark On A Path Towards Becoming A Technophile You. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptate dolorum! Asperiores laborum optio quae autem, adipisci voluptate ab error sunt laboriosam exercitationem dolore laudantium aliquam vero maxime repellendus. Facere recusandae nesciunt voluptates, officiis nostrum veniam aliquam mollitia, voluptatum pariatur quae voluptate aut porro voluptas quos? Officiis non labore libero?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam quod ducimus saepe iure maxime rerum vel minima odit unde nemo eius beatae reiciendis nihil itaque, natus mollitia dicta exercitationem? Possimus nihil facilis architecto aliquid nostrum minus suscipit dolore. Veritatis sunt illum est molestias quod, dicta nam quibusdam porro quas?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus provident dolores molestias commodi modi quasi magni deleniti suscipit. Veniam eaque omnis natus excepturi quo ad explicabo ipsum, aliquam adipisci error magnam at? Recusandae dolorem corrupti quasi laborum doloremque sequi dolor ipsum praesentium esse officia eum est fuga, ullam necessitatibus illum porro enim deleniti facilis voluptate velit suscipit asperiores sint animi. Accusantium commodi numquam cum pariatur, cumque, facere rem aspernatur ipsum blanditiis aliquid excepturi in voluptatem possimus aperiam suscipit! Ex, error. Ab harum cupiditate, nobis facilis magni sunt eaque quidem laboriosam consequatur magnam molestias maxime nisi. Sunt beatae iste odit voluptas.
        </p>
        <Button btnText={'Contact Us'} bgColor={'bg-red-400'} textColor={'text-white'}/>
        <Button btnText={'Join Classes'} bgColor={'bg-gray-100'} textColor={'text-red-400'}/>
      </div>
    {/* <img src="https://uidoor.com/wp-content/uploads/edd/2023/09/Hero-Section-01.png" alt="community frame" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-1 content-center w-2/5">
        <img className="border rounded-md md:h-56 md:w-64 mt-3 object-contain" src="https://res.cloudinary.com/dtnzacucq/image/upload/v1729061421/66bb67262eb960429907bcc4_669648a0617685b3acb61cc2_Best-tech-stack-for-software-development_e12y6r.png" alt="tech image" />
        <img className="border rounded-md md:h-56 md:w-64 p-1 object-contain" src="https://res.cloudinary.com/dtnzacucq/image/upload/v1729061338/10859214_gbweik.png" alt="tech image" />
        <img className="border rounded-e-full md:h-56 md:w-64 p-1 object-contain" src="https://res.cloudinary.com/dtnzacucq/image/upload/v1729061309/billboard_phvxhy.png" alt="tech image" />
        <img className="border rounded-md md:h-56 md:w-64 p-1 object-contain" src="https://res.cloudinary.com/dtnzacucq/image/upload/v1729061274/tech-future-careers---carousel2_bmwqgb.png" alt="tech image" />
      </div>
    </div>
  );
};

export default Hero;