import React, { Suspense } from "react";
import SpinnerMini from "../ui/SpinnerMini";
import ProfilePicture from "../ui/ProfilePicture";
import { useTitle } from "../customHooks/useTitle";

function Homepage() {
  useTitle("Portfolio || About");

  return (
    <div className="grid-rows-2[1fr_7rem_1fr] mx-auto mt-8 grid max-w-[70rem] grid-cols-2 items-center justify-center gap-5 px-28">
      <Suspense fallback={<SpinnerMini />}>
        <div>
          <ProfilePicture />
        </div>
      </Suspense>

      <div className="col-start-2">
        <header className="mb-3 flex flex-col border-b-[1px] border-blue-700 px-2">
          <h1 className="font-kingdom1 text-3xl tracking-wide">
            Alessandro Bergamo
          </h1>
          <p className="mb-1 px-2 text-lg italic text-orange-300">
            Front-End Developer
          </p>
        </header>

        <section>
          <p className="mt-4 px-2 italic">
            Former illustrator turned front-end developer, I've always had a
            passion for creativity and attention to detail. <br /> I love
            learning new technologies and turning them into real-world
            projects—it's my way of expressing myself and sharpening my skills.
          </p>
        </section>
      </div>

      <div className="col-span-2 ml-10 mr-32 mt-4 2xl:mt-10">
        <h2 className="border-b-[1px] border-blue-700 px-2 pb-1 font-kingdom1 text-2xl">
          Beyond Code
        </h2>
        <p className="mt-2 px-4 italic">
          When I’m not coding, I enjoy training in calisthenics, drawing, and
          playing videogames, especially those with immersive soundtracks. I
          also find inspiration by getting outside and meeting new people. Every
          experience can spark new ideas.
        </p>
      </div>
    </div>
  );
}

export default Homepage;
