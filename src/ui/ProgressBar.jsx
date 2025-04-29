function ProgressBar({ skillName, barColor, icon }) {
  return (
    <li className="flex flex-col gap-1 max-w-[670px] mx-auto">
      <div className="px-2">
        <div className="flex justify-between items-center max-w-[620px]">
          <h2 className="text-xl ml-2 font-kingdom1 mt-4 flex gap-2 items-center justify-center mb-2">
            <span>{icon}</span>
            <span>{skillName}</span>
          </h2>
          <p>
            <span className="text-2xl">⭐</span>{" "}
            <span className="font-kingdom1">100%</span>
          </p>
        </div>
        <svg
          className="border-blue-800 border-2 rounded-md"
          width="620"
          height="15"
        >
          <rect x="0" y="0" width="620" height="15" fill="#555" rx="5"></rect>
          <rect
            className="progress-bar"
            x="0"
            y="0"
            width="620"
            height="15"
            fill={barColor}
            rx="5"
          ></rect>
        </svg>

        {/* <svg
          className="border-blue-800 border-2 rounded-md sm:hidden 2xl:visible "
          width="760"
          height="20"
        >
          <rect x="0" y="0" width="760" height="20" fill="gray" rx="5"></rect>
          <rect
            className="progress-bar"
            x="0"
            y="0"
            width="760"
            height="20"
            fill={barColor}
            rx="5"
            class="progress-bar"
          ></rect>
        </svg> */}
      </div>
    </li>
  );
}

export default ProgressBar;
