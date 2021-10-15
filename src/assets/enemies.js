import basicAttackImage from "./skills/basic-attack.png";

export const enemyCollection = {
  skeletons: [
    {
      name: "Weak SkeleBoii",
      avatar: "weakSkeleton",
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
    },
    {
      name: "SkeleBoii",
      avatar: "skeleton",
      health: 14,
      level: 3,
      attributes: {
        strength: 3,
        endurance: 1,
        magic: 1,
        dexterity: 2,
        maxHealth: 14,
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
    },
  ],
};
