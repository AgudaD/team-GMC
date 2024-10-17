import img from "../assets/img/img02.jpg";
const About = () => {
  return (
    <div>
      <div className="md:w-[50%] m-auto flex flex-col gap-10 py-5">
        <h2 className="text-4xl font-black text-center">About Us</h2>

        <img src={img} alt="" className="m-auto" />

        <div className="flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum amet
            possimus nam incidunt soluta pariatur sed sequi, iusto repudiandae
            hic? Blanditiis, animi reprehenderit? Sed vel dicta adipisci
            asperiores non ullam, quas ea similique corrupti ex! Amet sed
            commodi voluptatum, iusto perspiciatis dignissimos reiciendis quidem
            ex, nisi temporibus consectetur nemo possimus.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            odio dolorem dolores explicabo cumque facere expedita nesciunt quasi
            harum sed, sit beatae deserunt tenetur ullam obcaecati! Unde
            adipisci impedit exercitationem voluptatum. Iste, veritatis quam
            temporibus impedit omnis eligendi laborum modi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
