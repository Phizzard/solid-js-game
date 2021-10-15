import { createContext } from "solid-js";
import createLocalStore from "./createLocalStore";

import basicAttackImage from "../assets/skills/basic-attack.png";

const initialState = {
  name: "Enemy",
  avatar: "weakSkeleton",
  health: 5,
  level: 1,
  attributes: {
    strength: 1,
    endurance: 1,
    magic: 1,
    dexterity: 1,
    maxHealth: 5,
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
      generateNextEnemy(newEnemy) {
        setEnemy({
          ...initialState,
          ...newEnemy,
          attributes: {
            ...initialState.attributes,
            ...newEnemy.attributes,
          },
        });
      },
    },
  ];

  return <EnemyContext.Provider value={store}>{props.children}</EnemyContext.Provider>;
}
