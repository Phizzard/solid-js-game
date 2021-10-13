import { createContext } from "solid-js";
import createLocalStore from "./../primitives/createLocalStore";

import basicAttackImage from "../assets/skills/basic-attack.png";

const initialPlayer = {
  name: "Player",
  attributes: {
    strength: 1,
    endurance: 1,
    magic: 1,
    dexterity: 1,
  },
  skills: [
    {
      id: "basicAttack",
      name: "Basic Attack",
      image: basicAttackImage,
      baseDamage: 1,
      bonusDamage: [
        {
          stat: "strength",
          magnitude: 1,
        },
      ],
    },
  ],
};

export const PlayerContext = createContext([initialPlayer, {}]);

export function PlayerProvider(props) {
  const [player, setPlayer] = createLocalStore(initialPlayer, "player");

  const store = [
    player,
    {
      attributeUp(attribute, increase) {
        setPlayer("attributes", attribute, (value) => value + increase);
      },
      rename(newName) {
        setPlayer("name", newName);
      },
      useSkill(skillId) {
        const skillToUse = player.skills.find((skill) => skill.id === skillId);
        const rawDamage =
          skillToUse.baseDamage +
          skillToUse.bonusDamage.reduce(
            (acc, bonus) =>
              acc +
              Math.floor(
                player.attributes[bonus.stat] *
                  (bonus.magnitude + bonus.magnitude * 0.2)
              ),
            0
          );

        return { rawDamage };
      },
    },
  ];

  return (
    <PlayerContext.Provider value={store}>
      {props.children}
    </PlayerContext.Provider>
  );
}
