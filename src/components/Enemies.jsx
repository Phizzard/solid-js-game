import { useContext } from "solid-js";
import { EnemyContext } from "../primitives/createEnemyContext";
import { EnemyCard } from "../components/EnemyCard";

export function Enemies() {
  const [state] = useContext(EnemyContext);

  return (
    <EnemyCard avatar={state.avatar} name={state.name} health={state.health} maxHealth={state.attributes.maxHealth} level={state.level} />
  );
}
