import { useState } from "react";
import LinkedInIcon from "../assets/linkedin.svg?react";
import GitHubIcon from "../assets/github.svg?react";
import { Copy, Mail } from "lucide-react";
import { useTitle } from "../customHooks/useTitle";

function Contacts() {
  const [copied, setCopied] = useState(false);
  const email = "ale.berg.93@gmail.com";

  useTitle("Portfolio || Contacts");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  }

  return (
    <div className="just flex flex-col gap-6 px-20 py-6 2xl:px-28">
      <a
        className="group flex items-center justify-start"
        href="https://www.linkedin.com/in/alessandro-bergamo-3190542b1/"
      >
        <span className="mr-12 flex gap-1 text-lg font-semibold">
          Linked
          <LinkedInIcon className="h-6 w-6 fill-[#407fd1]" />{" "}
        </span>

        <span className="font-kingdom1 text-base tracking-wider transition duration-300 group-hover:text-blue-700">
          Alessandro Bergamo
        </span>
      </a>

      <div className="flex items-center gap-16">
        <Mail className="mx-3 h-8 w-8 text-blue-700" />
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-3xl border-2 border-blue-700 px-4 py-2 transition-colors hover:border-orange-400 hover:shadow-[0px_0px_10px] hover:shadow-orange-400"
        >
          <span>{email}</span>
          <Copy className="h-6 w-6" />
          {copied && (
            <span className="ml-2 text-sm text-green-600">Copied!</span>
          )}
        </button>
      </div>

      <a
        className="group flex items-center justify-start"
        href="https://github.com/AlessandroB1993"
      >
        <span className="mr-12 flex gap-1 text-lg font-semibold">
          GitHub
          <GitHubIcon className="h-6 w-6 fill-[#524e4e]" />{" "}
        </span>

        <span className="font-kingdom1 text-base tracking-wider transition duration-300 group-hover:text-blue-700">
          AlessandroB1993
        </span>
      </a>
    </div>
  );
}

export default Contacts;
