import { createContext, useContext, useEffect, useRef, useState } from "react";
import khClick from "../assets/sounds/KhClick.ogg";
import khHover from "../assets/sounds/KhHover.ogg";

const AudioContext = createContext();

export function AudioContextProvider({ children }) {
  const [isMuted, setIsMuted] = useState(() => {
    const storedValue = localStorage.getItem("isMuted");
    return storedValue === null ? false : storedValue === "true";
  });

  const hoverSound = useRef(null);
  const clickSound = useRef(null);

  useEffect(() => {
    hoverSound.current = new Audio(khHover);
    clickSound.current = new Audio(khClick);
  }, []);

  useEffect(() => {
    localStorage.setItem("isMuted", isMuted);

    hoverSound.current.muted = isMuted;
    clickSound.current.muted = isMuted;
  }, [isMuted]);

  return (
    <AudioContext.Provider
      value={{ isMuted, setIsMuted, hoverSound, clickSound }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined)
    throw new Error("Cannot use context outside of provider");
  return context;
}
