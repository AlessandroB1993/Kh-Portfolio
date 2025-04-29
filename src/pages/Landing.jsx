import { Link } from "react-router-dom";
import { useAudio } from "../contexts/AudioContext";
import StarBackground from "../ui/StarBackground";
import Volume from "../ui/Volume";
import LandingText from "../ui/LandingText";
import { useTitle } from "../customHooks/useTitle";

function Landing() {
  const { clickSound } = useAudio();
  useTitle("Portfolio || Welcome");

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black">
      <StarBackground />
      <div className="absolute left-4 top-4 flex">
        <Volume />
      </div>

      <div className="relative z-10 mt-12 flex w-full flex-col items-center justify-center">
        <LandingText />

        <div className="group relative flex w-full items-center justify-center">
          <Link
            onClick={() => {
              clickSound.current.currentTime = 0;
              clickSound.current.play();
            }}
            className="link peer z-20 mt-6 bg-black"
            to="/about"
          >
            Enter
          </Link>
          <span className="absolute left-0 top-1/2 mt-3 h-[2px] w-1/2 origin-left translate-y-[-50%] scale-x-0 bg-orange-400 transition-transform duration-300 peer-hover:scale-x-100"></span>
          <span className="absolute right-0 top-1/2 mt-3 h-[2px] w-1/2 origin-right translate-y-[-50%] scale-x-0 bg-orange-400 transition-transform duration-300 peer-hover:scale-x-100"></span>
        </div>
      </div>

      <p className="absolute bottom-2 right-2 text-xs">
        Made with React & passion. &copy; 2025 Alessandro Bergamo
      </p>
    </div>
  );
}

export default Landing;
