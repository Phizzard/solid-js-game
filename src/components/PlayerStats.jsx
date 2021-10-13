import { useContext, createSignal } from "solid-js";
import { PlayerContext } from "../primitives/createPlayerContext";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function PlayerStats() {
  const [player, { rename }] = useContext(PlayerContext);
  const [showRenameDialog, setShowRenameDialog] = createSignal(false);
  const [newName, setNewName] = createSignal(player.name);

  const renameHandler = (e) => {
    rename(newName());
    setShowRenameDialog(false);
  };

  return (
    <>
      <div class="text-left text-base">
        <p onClick={() => setShowRenameDialog(true)}>Name: {player.name}</p>
        <p>Strength: {player.attributes.strength}</p>
        <p>Endurance: {player.attributes.endurance}</p>
        <p>Dexterity: {player.attributes.dexterity}</p>
        <p>Magic: {player.attributes.magic}</p>
      </div>
      <dialog open={showRenameDialog()}>
        <form method="dialog">
          <label id="playerName">Player Name</label>
          <Input
            label="Rename Player"
            name="playerName"
            value={newName()}
            onChange={(e) => setNewName(e.currentTarget.value)}
          />
          <Button onClick={renameHandler}>Save</Button>
        </form>
      </dialog>
    </>
  );
}
