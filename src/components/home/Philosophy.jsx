import React, { useEffect, useRef } from "react";
import URLOne from "../../assets/media/img/philosophyImages/philosophy-one.WebP";
import URLTwo from "../../assets/media/img/philosophyImages/philosophy-two.WebP";
import URLThree from "../../assets/media/img/philosophyImages/philosophy-three.WebP";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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

  // animation section
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom bottom",
        },
      });

      tl.from("h2",{
       opacity:0,
       y:-5,
       durationL:.2,
       ease:"circ.out"
      })
      .fromTo(
        ".card",
        {
          opacity: 0,
          y: 50,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
        .2,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="p-5 min-h-screen bg-[#fdf9f0] flex flex-col justify-center items-center"
    >
      <h2 className="text-xl font-serif text-[#795500] mb-20">Beyond Trends</h2>

      <div className="container flex flex-wrap justify-around gap-y-14">
        {philosophyCards.map((philosophy) => {
          return (
            <div
              key={philosophy.title}
              className="card w-80 flex flex-col items-center gap-y-8 text-center"
            >
              <img
                src={philosophy.image}
                alt={philosophy.title}
                className="w-52 rounded-[3rem] border border-[#795500] shadow-lg shadow-[#66552f]"
              />
              <h4 className="font-sans tracking-wider text-lg text-[#4f3803]">
                {philosophy.title}
              </h4>
              <p className="text-[#414845] leading-6 font-['Playfair']">
                {philosophy.message}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Philosophy;
