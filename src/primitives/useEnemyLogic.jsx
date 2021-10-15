import { useContext, createEffect } from "solid-js";
import { EnemyContext } from "../primitives/createEnemyContext";
import { enemyCollection } from "../assets/enemies";

export function useEnemyLogic() {
  const [state, { generateNextEnemy }] = useContext(EnemyContext);

  createEffect(() => {
    if (state.health <= 0) {
      // get me one of those SKELEBOIs
      const nextEnemy = enemyCollection.skeletons[Math.floor(Math.random() * enemyCollection.skeletons.length)];
      generateNextEnemy(nextEnemy);
    }
  }, state.health);
}
