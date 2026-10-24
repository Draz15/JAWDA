import React from "react";
import URLOne from "../../assets/media/img/philosophyImages/philosophy-one.jpeg";
import URLTwo from "../../assets/media/img/philosophyImages/philosophy-two.jpeg";
import URLThree from "../../assets/media/img/philosophyImages/philosophy-three.jpeg";

const Philosophy = () => {
  const philosophyCards = [
    {
      image: URLOne,
      title: "The Jawda Standard",
      message:
        "Luxury accessories, neutral tones, and elegant product styling.",
    },
    {
      image: URLTwo,
      title: " The Art of Craftsmanship",
      message: "Leather textures, stitching, hardware, and product details.",
    },
    {
      image: URLThree,
      title: "Pieces Worth Keeping",
      message: "A coordinated flat lay of timeless accessories.",
    },
  ];

  return (
    <section className="p-5 min-h-screen bg-[#fdf9f0] flex flex-col justify-center items-center">
      <h2 className="text-xl font-serif text-[#795500] mb-20">Beyond Trends</h2>

      <div className="container flex flex-wrap justify-around gap-y-14">
        {philosophyCards.map((philosophy) => {
          return (
            <div key={philosophy.title} className="card w-80 flex flex-col items-center gap-y-8 text-center">
              <img src={philosophy.image} alt={philosophy.title} className="w-52 rounded-[3rem] border border-[#795500] shadow-lg shadow-[#66552f]" />
              <h4 className="font-sans tracking-wider text-lg text-[#4f3803]">{philosophy.title}</h4>
              <p className="text-[#414845] leading-6 font-['Playfair']">{philosophy.message}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Philosophy;
