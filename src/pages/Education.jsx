import { useTitle } from "../customHooks/useTitle";

function Education() {
  useTitle("Portfolio || Formazione");

  return (
    <div className="mx-auto flex max-w-[90rem] flex-col gap-12 p-3 2xl:mt-8 2xl:gap-16">
      <div className="max-w-[43rem] self-start 2xl:max-w-[50rem]">
        <h2 className="border-b-2 border-blue-700 px-3 py-2 font-kingdom1 text-2xl text-orange-300">
          Come mi sono approcciato alla programmazione
        </h2>
        <p className="mt-2 flex-wrap px-4 italic">
          Mi sono avvicinato alla programmazione seguendo il corso:{" "}
          <a
            href="https://pll.harvard.edu/course/cs50-introduction-computer-science"
            className="text-blue-300 underline hover:text-blue-200 focus:text-blue-200"
            target="_blank"
          >
            CS50: Introduction to Computer Science
          </a>{" "}
          dell'Università di Harvard, che introduce le basi dell'informatica
          partendo dal linguaggio C e ponendo una forte enfasi sul problem
          solving.
        </p>
      </div>

      <div className="max-w-[43rem] self-end 2xl:max-w-[50rem]">
        <h2 className="border-b-2 border-blue-700 px-3 py-2 text-end font-kingdom1 text-2xl text-orange-300">
          Perché ho scelto il front-end development
        </h2>
        <p className="mt-2 flex-wrap px-4 italic">
          Dopo una breve introduzione a JavaScript, ho deciso di approfondirlo
          con un{" "}
          <a
            className="text-blue-300 underline hover:text-blue-200 focus:text-blue-200"
            target="_blank"
            href="https://www.udemy.com/course/the-complete-javascript-course/"
          >
            corso dedicato
          </a>
          . Mi ha subito affascinato capire come funziona il web e ho proseguito
          il mio{" "}
          <a
            className="text-blue-300 underline hover:text-blue-200 focus:text-blue-200"
            target="_blank"
            href="https://www.udemy.com/course/the-ultimate-react-course/"
          >
            percorso con React
          </a>
          , esplorando anche librerie, strumenti e framework come Next.js.
        </p>
      </div>

      <div className="max-w-[43rem] self-start 2xl:max-w-[50rem]">
        <h2 className="border-b-2 border-blue-700 px-3 py-2 font-kingdom1 text-2xl text-orange-300">
          Il tipo di percorso
        </h2>
        <p className="mt-2 flex-wrap px-4 italic">
          Il mio è un percorso da autodidatta, basato su videocorsi, materiale
          scritto (lezioni, articoli e la documentazione{" "}
          <a
            className="text-blue-300 underline hover:text-blue-200 focus:text-blue-200"
            target="_blank"
            href="https://developer.mozilla.org/en-US/"
          >
            MDN
          </a>
          ) e tanta pratica. Mi sono esercitato su piattaforme come{" "}
          <span className="text-orange-200">freeCodeCamp</span> e{" "}
          <span className="text-orange-200">LeetCode</span> ma sopratutto
          costurendo progetti &minus; inizialmente guidati dai corsi, poi
          completamente personali.
        </p>
      </div>
    </div>
  );
}

export default Education;
