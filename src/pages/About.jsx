import React, { Suspense } from "react";
import SpinnerMini from "../ui/SpinnerMini";
import ProfilePicture from "../ui/ProfilePicture";
import { useTitle } from "../customHooks/useTitle";

function Homepage() {
  useTitle("Portfolio || Chi sono");

  return (
    <div className="grid-rows-2[1fr_7rem_1fr] mx-auto mt-8 grid max-w-[70rem] grid-cols-2 items-center justify-center gap-5 px-28">
      <Suspense fallback={<SpinnerMini />}>
        <div>
          <ProfilePicture />
        </div>
      </Suspense>

      <div className="col-start-2">
        <header className="mb-3 flex flex-col border-b-[1px] border-blue-700 px-2">
          <h1 className="font-kingdom1 text-3xl tracking-wide">
            Alessandro Bergamo
          </h1>
          <p className="mb-1 px-2 text-lg italic text-orange-300">
            Sviluppatore Front-end
          </p>
        </header>

        <section>
          <p className="mt-4 px-2 italic">
            Da ex illustratore a sviluppatore front-end, ho sempre avuto una
            passione per la creatività e l'attenzione ai dettagli. <br /> Amo
            imparare nuove tecnologie e trasformarle in progetti concreti: è il
            mio modo di esprimermi e, al tempo stesso, di affinare le mie
            competenze.
          </p>
        </section>
      </div>

      <div className="col-span-2 ml-10 mr-32 mt-4 2xl:mt-10">
        <h2 className="border-b-[1px] border-blue-700 px-2 pb-1 font-kingdom1 text-2xl">
          Oltre il codice
        </h2>
        <p className="mt-2 px-4 italic">
          Quando non sto programmando, mi piace allenarmi con il calisthenics,
          disegnare o immergermi nei videogiochi, specialmente quelli con
          colonne sonore coinvolgenti. Trovo ispirazione anche uscendo e
          conoscendo persone nuove: ogni esperienza può dare vita a nuove idee.
        </p>
      </div>
    </div>
  );
}

export default Homepage;

{
  /* <Link
        className="font-kingdom1 row-start-2 justify-self-center self-start mt-14 col-span-2 border-blue-800 border-4 rounded-[2rem] transition-all duration-300 ease-in-out font-normal text-white text-2xl tracking-wide w-64 h-[3.5rem] flex items-center justify-center hover:border-orange-400 hover:shadow-orange-400
             hover:shadow-[0px_0px_10px]"
        to="/projects"
      >
        Progetti
      </Link> */
}
