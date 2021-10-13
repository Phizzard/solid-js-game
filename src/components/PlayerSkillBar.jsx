import { For, useContext } from "solid-js";
import { PlayerContext } from "../primitives/createPlayerContext";
import { EnemyContext } from "../primitives/createEnemyContext";

export function PlayerSkillBar() {
  const [player, { useSkill }] = useContext(PlayerContext);
  const [, { reduceHealth }] = useContext(EnemyContext);

  const skillOnClickHandler = (skill) => {
    reduceHealth(useSkill(skill.id).rawDamage);
  };

  return (
    <div class="flex">
      <For each={player.skills} fallback={<div>Loading...</div>}>
        {(skill) => (
          <img
            class="transition duration-100 ease-in-out h-20 w-20 transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            onClick={() => skillOnClickHandler(skill)}
            src={skill.image}
          />
        )}
      </For>
    </div>
  );
}
