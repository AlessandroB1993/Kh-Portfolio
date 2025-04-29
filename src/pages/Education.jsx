import { useTitle } from "../customHooks/useTitle";

function Education() {
  useTitle("Portfolio || Education");

  return (
    <div className="mx-auto flex max-w-[90rem] flex-col gap-12 p-3 2xl:mt-8 2xl:gap-16">
      <div className="max-w-[43rem] self-start 2xl:max-w-[50rem]">
        <h2 className="border-b-2 border-blue-700 px-3 py-2 font-kingdom1 text-2xl text-orange-300">
          How I Got Into Programming
        </h2>
        <p className="mt-2 flex-wrap px-4 italic">
          I got into programming through the Harvard course:{" "}
          <a
            href="https://pll.harvard.edu/course/cs50-introduction-computer-science"
            className="text-blue-300 underline hover:text-blue-200 focus:text-blue-200"
            target="_blank"
          >
            CS50: Introduction to Computer Science
          </a>
          , which covers the fundamentals of computer science starting with the
          C language and places a strong emphasis on problem solving.
        </p>
      </div>

      <div className="max-w-[43rem] self-end 2xl:max-w-[50rem]">
        <h2 className="border-b-2 border-blue-700 px-3 py-2 text-end font-kingdom1 text-2xl text-orange-300">
          Why I Chose Front-End Development
        </h2>
        <p className="mt-2 flex-wrap px-4 italic">
          After a brief introduction to JavaScript, I decided to dive deeper
          through a{" "}
          <a
            className="text-blue-300 underline hover:text-blue-200 focus:text-blue-200"
            target="_blank"
            href="https://www.udemy.com/course/the-complete-javascript-course/"
          >
            dedicated course
          </a>
          . I was immediately fascinated by how the web works, and I continued
          my{" "}
          <a
            className="text-blue-300 underline hover:text-blue-200 focus:text-blue-200"
            target="_blank"
            href="https://www.udemy.com/course/the-ultimate-react-course/"
          >
            journey with React
          </a>
          , exploring libraries, tools, and frameworks like Next.js.
        </p>
      </div>

      <div className="max-w-[43rem] self-start 2xl:max-w-[50rem]">
        <h2 className="border-b-2 border-blue-700 px-3 py-2 font-kingdom1 text-2xl text-orange-300">
          My Learning Path
        </h2>
        <p className="mt-2 flex-wrap px-4 italic">
          I'm a self-taught developer, learning through video courses, written
          resources (lessons, articles, and{" "}
          <a
            className="text-blue-300 underline hover:text-blue-200 focus:text-blue-200"
            target="_blank"
            href="https://developer.mozilla.org/en-US/"
          >
            MDN documentation
          </a>
          ) and lots of hands-on practice. I trained on platforms like{" "}
          <span className="text-orange-200">freeCodeCamp</span> and{" "}
          <span className="text-orange-200">LeetCode</span> but especially by
          building projects &minus; first guided by courses, then entirely
          personal.
        </p>
      </div>
    </div>
  );
}

export default Education;
