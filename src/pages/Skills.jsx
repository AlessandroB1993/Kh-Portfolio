import ProgressBar from "../ui/ProgressBar";

import HtmlIcon from "../assets/html5.svg?react";
import CssIcon from "../assets/css.svg?react";
import JsIcon from "../assets/javascript.svg?react";
import ReactIcon from "../assets/react.svg?react";
import NextJsIcon from "../assets/nextdotjs.svg?react";
import NodeJsIcon from "../assets/nodedotjs.svg?react";
import { useTitle } from "../customHooks/useTitle";

function Skills() {
  useTitle("Portfolio || Skills");

  return (
    <section className="mx-auto max-w-[83rem] p-2">
      <h1 className="border-b-[1px] border-orange-400 pb-2 text-center font-kingdom1 text-3xl">
        Skills Acquired
      </h1>

      <div className="grid grid-cols-[22rem_38rem] gap-7 2xl:grid-cols-[25rem_1fr]">
        <div className="ml-auto mr-3 mt-[30%] h-[68%] min-w-[15rem] max-w-[19rem]">
          <h2 className="mx-4 mb-4 border-b-[1px] border-b-orange-300 pb-1 text-center font-kingdom1">
            Soft Skills
          </h2>
          <ul className="flex h-full flex-col gap-4 divide-y divide-blue-800 rounded-md border-[1px] border-blue-800 bg-slate-900 px-2 py-3">
            <li>
              <h3 className="text-center text-sm font-bold text-orange-200">
                Problem Solving
              </h3>
              <p className="px-3 pt-1 text-xs italic">
                Finding practical solutions to complex problems.
              </p>
            </li>
            <li>
              <h3 className="mt-1 py-1 text-center text-sm font-bold text-orange-200">
                Self-Management
              </h3>
              <p className="px-3 text-xs italic">
                I’ve learned to organize my time and my learning process
                effectively.
              </p>
            </li>
            <li>
              <h3 className="mt-1 py-1 text-center text-sm font-bold text-orange-200">
                Curiosity
              </h3>
              <p className="px-3 text-xs italic">
                I don't stop at "it works", I want to understand why it works.
              </p>
            </li>
            <li>
              <h3 className="mt-1 py-1 text-center text-sm font-bold text-orange-200">
                Adaptability
              </h3>
              <p className="px-3 text-xs italic">
                I learn quickly and adapt easily to new environments, languages,
                or tools.
              </p>
            </li>
            <li>
              <h3 className="mt-1 py-1 text-center text-sm font-bold text-orange-200">
                Communication
              </h3>
              <p className="px-3 text-xs italic">
                I'm able to explain technical concepts in simple terms and I’m
                always open to feedback.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-3">
          <ul className="mb-10 mt-12 flex flex-col gap-6 divide-y divide-blue-600 px-6 2xl:max-w-[90%]">
            <ProgressBar
              icon={<HtmlIcon className="h-7 w-7 fill-[#E34F26]" />}
              barColor={"#E34F26"}
              skillName="HTML"
            />
            <ProgressBar
              icon={<CssIcon className="h-7 w-7 fill-[#1572B6]" />}
              barColor={"#1572B6"}
              skillName="CSS"
            />

            <ProgressBar
              icon={<JsIcon className="h-7 w-7 fill-[#F7DF1E]" />}
              barColor={"#F7DF1E"}
              skillName="Javascript"
            />
            <ProgressBar
              icon={<ReactIcon className="h-7 w-7 fill-[#61DAFB]" />}
              barColor={"#61DAFB"}
              skillName="React"
            />
            <ProgressBar
              icon={<NextJsIcon className="h-7 w-7 fill-[#ddd]" />}
              barColor={"#ddd"}
              skillName="Next.js"
            />
          </ul>

          <div className="max-w-[670px]">
            <h2 className="text-center font-kingdom1 text-xl tracking-wider">
              Soon...
            </h2>

            <div className="mx-auto flex max-w-[620px] items-center justify-between">
              <h2 className="mb-2 ml-2 mt-2 flex items-center justify-center gap-2 font-kingdom1 text-xl">
                <span>
                  <NodeJsIcon className="h-7 w-7 fill-[#5FA04E] opacity-55" />
                </span>
                <span className="text-gray-600">Node.js</span>
              </h2>
              <p>
                <span className="font-kingdom1 text-gray-600">10%</span>
              </p>
            </div>

            <svg
              className="mx-auto rounded-md border-2 border-blue-950 opacity-55"
              width="620"
              height="15"
            >
              <rect
                x="0"
                y="0"
                width="620"
                height="15"
                fill="#555"
                rx="5"
              ></rect>
              <rect
                className="progress-bar-incomplete"
                x="0"
                y="0"
                width="62"
                height="15"
                fill="#5FA04E"
                rx="5"
              ></rect>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
