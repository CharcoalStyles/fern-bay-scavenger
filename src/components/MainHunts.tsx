import { useLocalStorage } from "@uidotdev/usehooks";
import Image from "next/image";

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
  // const [selectedHunt, setSelectedHunt] = useLocalStorage<string[]>(
  //   "selectedHunt",
  //   []
  // );

  return (
    <div className="flex flex-row gap-2 items-center w-screen overflow-x-auto">
      {hunts.map((hunt) => (
        <div key={hunt}>
          <Image src={`/${hunt}.png`} alt={hunt} width={100} height={100} />
          <p>{hunt}</p>
        </div>
      ))}
    </div>
  );
};
