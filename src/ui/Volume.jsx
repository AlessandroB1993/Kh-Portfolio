import { Volume2Icon, VolumeX } from "lucide-react";
import { useAudio } from "../contexts/AudioContext";

function Volume() {
  const { isMuted, setIsMuted } = useAudio();

  return (
    <span
      onClick={() => setIsMuted((s) => !s)}
      className="mx-3 cursor-pointer rounded-md border-[1px] border-[#4255b4] px-1 py-[1px]"
    >
      {isMuted ? (
        <VolumeX color="#5e6270" height={18} width={18} />
      ) : (
        <Volume2Icon color="#dcdee7" height={18} width={18} />
      )}
    </span>
  );
}

export default Volume;
