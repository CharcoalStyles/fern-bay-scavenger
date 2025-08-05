import { useLocalStorage } from "@uidotdev/usehooks";
import Image from "next/image";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export const ShellHunts = () => {
  const [shellHunt, setShellHunt] = useLocalStorage<number>("shellHunt", 0);

  return (
    <div className="flex flex-row gap-2 justify-around items-center w-full">
      <button
      disabled={shellHunt <= 0}
        onClick={() => {
          setShellHunt((prev) => (prev > 0 ? prev - 1 : 0));
        }}
        className="p-2 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed">
        Remove
      </button>
      <div className="flex flex-col items-center">
        <Image
          src={`/Shell.png`}
          alt={`Shell Hunt ${shellHunt}`}
          width={100}
          height={100}
        />
        <p className="text-center text-gray-700 font-semibold">
          Shells: {shellHunt}/10
        </p>
      </div>
      <button
      disabled={shellHunt >= 10}
        onClick={() => {
          setShellHunt((prev) => (prev < 10 ? prev + 1 : 10));
        }}
        className="p-2 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed">
        Add
      </button>
    </div>
  );
};
