import { useTitle } from "../customHooks/useTitle";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  useTitle("Portfolio || Projects");

  return (
    <div className="mx-auto flex max-w-[100rem] flex-col">
      <h1 className="mx-12 border-b-[1px] border-orange-400 pb-2 text-center font-kingdom1 text-3xl">
        Finished Projects
      </h1>

      <ul className="mx-auto mt-16 grid min-w-[70%] max-w-[90%] grid-cols-2 gap-x-7 gap-y-6 overflow-auto lg:gap-y-8 2xl:max-w-[85%] 2xl:grid-cols-3 2xl:gap-x-11">
        <li className="min-w-[20rem] max-w-[24rem] rounded-lg border-4 border-blue-700 transition duration-300 hover:border-orange-400 hover:bg-slate-900 hover:shadow-[0px_0px_10px] hover:shadow-orange-400 2xl:max-w-[30rem]">
          <ProjectCard
            image={"/wild-oasis-staff.webp"}
            projectName={"The Wild Oasis App"}
            techs={["React", "React Query", "Supabase"]}
            href="https://the-wild-oasis-aleberg.netlify.app/"
          >
            An app for B&B staff to manage bookings, check guests in and out,
            add rooms, and register new team members.
          </ProjectCard>
        </li>

        <li className="max-h-[32rem] min-w-[20rem] max-w-[24rem] rounded-lg border-4 border-blue-700 transition duration-300 hover:border-orange-400 hover:bg-slate-900 hover:shadow-[0px_0px_10px] hover:shadow-orange-400 2xl:max-w-[30rem]">
          <ProjectCard
            image={"/wild-oasis-website.webp"}
            projectName={"The Wild Oasis Website"}
            techs={["React", "Next.js", "SSR"]}
            href="https://the-wild-oasis-website-three-black.vercel.app/"
          >
            A B&B website where, once authenticated, users can view available
            rooms, make reservations, and edit their profile.
          </ProjectCard>
        </li>

        <li className="max-h-[32rem] min-w-[20rem] max-w-[24rem] rounded-lg border-4 border-blue-700 transition duration-300 hover:border-orange-400 hover:bg-slate-900 hover:shadow-[0px_0px_10px] hover:shadow-orange-400 2xl:max-w-[30rem]">
          <ProjectCard
            image={"/forkify.webp"}
            projectName="Forkify"
            techs={["Javascript"]}
            href="https://forkify-alessandrob.netlify.app/"
          >
            A single page application to search for recipes, add new ones, and
            save your favorites.
          </ProjectCard>
        </li>

        <li className="max-h-[32rem] min-w-[20rem] max-w-[24rem] rounded-lg border-4 border-blue-700 transition duration-300 hover:border-orange-400 hover:bg-slate-900 hover:shadow-[0px_0px_10px] hover:shadow-orange-400 2xl:max-w-[30rem]">
          <ProjectCard
            image={"/worldwise.webp"}
            projectName={"Worldwise"}
            techs={["React", "React Router"]}
            href="https://worldwise-aleberg.netlify.app/"
          >
            Log in and click on an interactive map to mark places you've
            visited, leave comments, and keep track of visited countries.
          </ProjectCard>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
