import { useState } from "react";

function ProjectCard({ children, image, projectName, techs, href }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <a className="flex flex-col" href={href} target="_blank">
      <div className="flex flex-col items-center justify-center rounded-tl-lg rounded-tr-lg bg-black py-2">
        <h2 className="py-2 font-kingdom1 text-lg font-semibold tracking-widest 2xl:text-2xl">
          {projectName}
        </h2>
        <div className="max-h-54 relative min-h-48 w-full bg-black">
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-slate-700 object-cover" />
          )}
          <img
            src={image}
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            alt="Anteprima sito"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>

      <p className="h-20 bg-black px-4 pb-2 text-[0.9rem] italic tracking-wide">
        {children}
      </p>

      <div className="flex items-center justify-around border-t-2 border-blue-700 py-1">
        {techs?.length > 0 &&
          techs.map((tech, i) => (
            <p
              key={i}
              className="px-4 py-1 text-center text-[1.1rem] font-bold 2xl:text-xl"
            >
              {tech}
            </p>
          ))}
      </div>
    </a>
  );
}

export default ProjectCard;
