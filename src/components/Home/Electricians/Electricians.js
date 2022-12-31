import React from "react";

const Electricians = () => {
  const data = [
    {
      name: "Daniel Alvis",
      title: "Electrician",
      img: "https://www.hedgehogelectric.com/images/blog/When-to-Call-an-Electrician-vs.-a-Handyman.jpg",
    },
    {
      name: "Marcus Mac",
      title: "Electrician",
      img: "https://www.sait.ca/assets/images/sait/programs/pr-pre-employment-electrician-600x400.jpg",
    },
    {
      name: "Lories Joseph",
      title: "Electrician",
      img: "https://www.zensurance.com/wp-content/uploads/2022/06/Electricianworking.jpg",
    },
  ];
  return (
    <div className="my-20">
      <div>
        <h2 className="text-4xl text-center">Our Electricians</h2>
        <p className="text-center">
          We have well trained electricians for your services
        </p>
      </div>
      <div className="grid max-w-screen-xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
        {data.map((item, i) => (
          <div key={i} className="border pb-5">
            <img className="w-full" src={item.img} alt="" />
            <div>
                <h3 className="text-xl font-bold text-center">{item.name}</h3>
                <p className="text-center text-red-500">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electricians;
