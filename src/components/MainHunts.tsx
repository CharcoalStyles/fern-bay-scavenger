import { useLocalStorage } from "@uidotdev/usehooks";
import Image from "next/image";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const hunts = [
  "Sheoak",
  "Paperbark",
  "Ironbark",
  "Spinifex",
  "Sygna",
  "Stringybark",
  "Oimara",
  "Dune",
  "Plover",
  "Foxtail",
  "Norfolk",
  "Sandcastle",
  "Windsurf",
  "Jabiru",
  "Myrtle",
];

export const MainHunts = () => {
  const [selectedHunt, setSelectedHunt] = useLocalStorage<boolean[]>(
    "selectedHunt",
    hunts.map(() => false)
  );

  return (
    <div className="flex flex-row gap-2 items-center w-screen overflow-x-auto -mx-2">
      <div className="w-4 h-2 text-white">.</div>
      {hunts.map((hunt, i) => (
        <div
          key={hunt}
          onClick={() => {
            const newSelectedHunt = [...selectedHunt];
            newSelectedHunt[i] = !newSelectedHunt[i];
            setSelectedHunt(newSelectedHunt);
          }}>
          {!selectedHunt[i] && (
            <XCircleIcon className="w-5 h-5 text-red-500 cursor-pointer relative top-4" />
          )}
          {selectedHunt[i] && (
            <CheckCircleIcon className="w-5 h-5 text-green-500 cursor-pointer relative top-4" />
          )}
          <Image src={`/${hunt}.png`} alt={hunt} width={100} height={100} />
          <p>{hunt}</p>
        </div>
      ))}
      <div className="w-4 h-2 text-white">.</div>
    </div>
  );
};
