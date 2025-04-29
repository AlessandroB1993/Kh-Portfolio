import { useEffect, useState } from "react";

const text = "Are you ready to explore?";

function LandingText() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   let i = 0;
  //   const interval = setInterval(() => {
  //     setDisplayedText(text.slice(0, i + 1));
  //     i++;
  //     if (i === text.length) clearInterval(interval);
  //   }, 50);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const delay = 650; // delay
    const typingSpeed = 50; // typing speed

    const timeout = setTimeout(
      () => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex((i) => i + 1);
        }
      },
      index === 0 ? delay : typingSpeed,
    ); // only the first hads a delay

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <h1 className="mt-4 min-h-[3rem] text-center font-kingdom1 text-xl font-semibold uppercase tracking-widest text-white sm:text-2xl">
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
}

export default LandingText;
