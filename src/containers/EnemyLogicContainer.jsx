import { useEnemyLogic } from "./../primitives/useEnemyLogic";

export function EnemyLogicContainer(props) {
  useEnemyLogic();

  return props.children;
}
