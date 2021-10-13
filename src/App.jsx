import { PlayerProvider } from "./primitives/createPlayerContext";
import { PlayerStats } from "./components/PlayerStats";
import { PlayerSkillBar } from "./components/PlayerSkillBar";
import styles from "./App.module.css";
import { EnemyProvider } from "./primitives/createEnemyContext";
import { Enemies } from "./components/Enemies";

function App() {
  return (
    <EnemyProvider>
      <PlayerProvider>
        <div class="text-center font-body">
          <div class={styles.gameContainer}>
            <div id="modal"></div>

            <div class="absolute top-1 left-1">
              <PlayerStats />
            </div>
            <Enemies />
            <div class="absolute bottom-10">
              <PlayerSkillBar />
            </div>
          </div>
        </div>
      </PlayerProvider>
    </EnemyProvider>
  );
}

export default App;
