import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadBasic } from "tsparticles-basic";

function StarBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadBasic(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        background: { color: "#000" },
        particles: {
          number: { value: 43 },
          color: { value: ["#e4ad5c", "#6ba7eb"] },
          opacity: {
            value: 0.7,
            random: true,
          },
          size: {
            value: 4,
            random: { enable: true, minimumValue: 1 },
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
      }}
    />
  );
}

export default StarBackground;
