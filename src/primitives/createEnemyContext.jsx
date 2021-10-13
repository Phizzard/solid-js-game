import { createContext } from "solid-js";
import createLocalStore from "./createLocalStore";

import basicAttackImage from "../assets/skills/basic-attack.png";

const initialState = {
  name: "SkeleBoii",
  health: 10,
  level: 1,
  attributes: {
    strength: 1,
    endurance: 1,
    magic: 1,
    dexterity: 1,
    maxHealth: 10,
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

export const EnemyContext = createContext([initialState, {}]);

export function EnemyProvider(props) {
  const [enemy, setEnemy] = createLocalStore(initialState, "enemy");

  const store = [
    enemy,
    {
      reduceHealth(decrement) {
        setEnemy("health", (value) => value - decrement);
      },
      rename(newName) {
        setEnemy("name", newName);
      },
      generateNextEnemy() {
        setEnemy({
          ...initialState,
          name: "NEW SKELEBOI",
          level: 2,
          health: 12,
          attributes: {
            ...initialState.attributes,
            maxHealth: 12,
            strength: 1,
          },
        });
      },
    },
  ];

  return (
    <EnemyContext.Provider value={store}>
      {props.children}
    </EnemyContext.Provider>
  );
}
