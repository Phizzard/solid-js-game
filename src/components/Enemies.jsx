import { useContext, createEffect } from "solid-js";
import { EnemyContext } from "../primitives/createEnemyContext";
import { EnemyCard } from "../components/EnemyCard";

export function Enemies() {
  const [state, { generateNextEnemy }] = useContext(EnemyContext);

  createEffect(() => {
    if (state.health <= 0) {
      generateNextEnemy();
    }
  }, state.health);

  return (
    <EnemyCard
      avatar="skeleton"
      name={state.name}
      health={state.health}
      maxHealth={state.attributes.maxHealth}
      level={state.level}
    />
  );
}
