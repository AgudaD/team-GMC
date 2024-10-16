import TCard from "./TCard";

const Testimonial = () => {
  const testimonies = [
    {
      id: 1,
      name: "Peter Doyle",
      testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum consequuntur facere nemo officiis nulla. Quasi ad exercitationem deserunt cum quia, voluptatum facere rem hic, blanditiis ducimus ab doloribus, cupiditate maxime ut.",
      image: "https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947"
    },
    {
      id: 2,
      name: "Margaret Joy",
      testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum consequuntur facere nemo officiis nulla. Quasi ad exercitationem deserunt cum quia, voluptatum facere rem hic, blanditiis ducimus ab doloribus, cupiditate maxime ut.",
      image: "https://images.squarespace-cdn.com/content/v1/590cc57ebe659408c68d77fd/1539111100345-873MNDZSI8DNBCMXS8MQ/Header.jpg"
    },
    {
      id: 3,
      name: "Mike Scaloni",
      testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum consequuntur facere nemo officiis nulla. Quasi ad exercitationem deserunt cum quia, voluptatum facere rem hic, blanditiis ducimus ab doloribus, cupiditate maxime ut.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnQO-oC2Gc4qwgeNMzLmK3w7NDxuwtDpsdg&s"
    },
  ]
  return (
    <div className="mt-10">
      <h1 className="font-bold text-lg">Testimonials</h1>
      <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {
          testimonies.map((testimony) => (
            <div key={testimony.id}>
              <TCard testimony={testimony.testimony} name={testimony.name} image={testimony.image} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Testimonial;
