import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef(null);
  const h12 = useRef(null);
  const h13 = useRef(null);
  const myimageref = useRef(null);

  useEffect(() => {
    gsap.from([h11.current, h12.current, h13.current], {
      x: "-100%",
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power3.out",
    });

    gsap.from(myimageref.current, {
      x: "100%",
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <main className="container mx-auto max-w-screen-lg min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-5 md:px-10">
      {/* Right Section (Image) */}
      <div className="mt-10 md:mt-0 w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          ref={myimageref}
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full shadow-lg"
          src={img}
          alt={name}
        />
      </div>

      {/* Left Section (Text) */}
      <div className="text-center md:text-left flex flex-col items-center md:items-start">
        <h1
          ref={h11}
          className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading"
        >
          Hi,👋<br />My Name is
        </h1>
        <h1
          ref={h12}
          className="text-3xl md:text-5xl xl:text-6xl font-bold bg-clip-text bg-gradient text-transparent mb-6 leading-normal pb-2"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-xl md:text-3xl xl:text-4xl font-semibold text-dark-heading dark:text-light-heading mt-2 leading-normal"
        >
          {tagline}
        </h2>
      </div>
    </main>
  );
}

export default Home;
