import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import NavLink from "./CustomNavLink";
import { useAudio } from "../contexts/AudioContext";

const pages = [
  "About-/about",
  "Education-/education",
  "Projects-/projects",
  "Skills-/skills",
  "Contacts-/contacts",
];

function SideBar() {
  const [glowTop, setGlowTop] = useState(260);
  const [glowLeft, setGlowLeft] = useState(250);
  const { pathname } = useLocation();
  const { hoverSound, clickSound, isMuted } = useAudio();

  const linkRef = useRef([]);
  const clickRef = useRef();

  // Creiamo ref per ogni elemento della lista, solo se non esiste già (in caso di re-render)
  linkRef.current = pages.map(
    (_, i) => linkRef.current[i] ?? React.createRef(),
  );

  /// HANDLERS ///
  function handleMouseEnter(e) {
    if (clickRef.current !== e.currentTarget) {
      hoverSound.current.pause();
      hoverSound.current.currentTime = 0;
      hoverSound.current.play();
    }

    const offset = e.target.offsetTop;
    const offsetLeft =
      e.currentTarget.offsetLeft + e.currentTarget.offsetWidth + 6;

    setGlowTop(offset);
    setGlowLeft(offsetLeft);
  }

  function handleClick(e) {
    if (e.currentTarget === clickRef.current || isMuted) return;

    clickSound.current.currentTime = 0;
    clickSound.current.play();
  }

  function handleMouseOut(e) {
    if (clickRef.current === e.currentTarget) return;

    // Selezioniamo dove va il mouse all'uscita
    const leftTo = e.relatedTarget;

    // Se l'elemento all'uscita è figlio di currentTarget (<ul>), usciamo dalla Fn
    if (e.currentTarget.contains(leftTo)) return;

    // Altrimenti impostiamo glowTop nella posizione dell'ultimo clicked <li>
    setGlowTop(clickRef.current.offsetTop);
    setGlowLeft(clickRef.current.offsetLeft + clickRef.current.offsetWidth + 6);
  }

  /// EFFECTS ///
  useEffect(() => {
    const currentPath = pathname.slice(1);
    const index = pages.findIndex(
      (page) => page.split("-/").at(-1) === currentPath,
    );

    function updateGlowPosition() {
      if (linkRef.current[index]?.current && index !== -1)
        clickRef.current = linkRef.current[index]?.current;

      setGlowTop(clickRef.current?.offsetTop - 1);
      setGlowLeft(
        clickRef.current?.offsetLeft + clickRef.current?.offsetWidth + 9.5,
      );
    }
    updateGlowPosition();

    window.addEventListener("resize", updateGlowPosition);

    return () => window.removeEventListener("resize", updateGlowPosition);
  }, [pathname]);

  return (
    <aside className="row-span-full ml-4 flex h-full items-center border-r-blue-700 bg-black px-2 py-5">
      {/* Glow ball */}
      <div
        className={`absolute h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_10px_4px_#e39f33] blur-[2px] transition-all duration-300`}
        style={{
          top: glowTop,
          left: glowLeft,
        }}
      />

      <nav>
        <ul
          onMouseOut={handleMouseOut}
          className="flex flex-col items-center gap-5 text-2xl"
        >
          {pages.map((page, i) => (
            <li
              ref={linkRef.current[i]}
              onMouseEnter={handleMouseEnter}
              onClick={handleClick}
              key={page}
            >
              <NavLink to={page.split("-").at(-1)}>
                <span>{page.split("-").at(0)}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
