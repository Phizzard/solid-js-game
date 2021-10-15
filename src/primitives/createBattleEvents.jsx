import { createContext } from "solid-js";
import createLocalStore from "./../primitives/createLocalStore";

const initialBattleEvents = [];

export const BattleEventContext = createContext([initialBattleEvents, {}]);

export function BattleEventProvider(props) {
  const [battleEvents, setBattleEvents] = createLocalStore(initialBattleEvents, "battleEvents");

  const store = [
    battleEvents,
    {
      addNewEvent(newEvent) {
        setBattleEvents([...battleEvents, newEvent]);
      },
    },
  ];

  return <BattleEventContext.Provider value={store}>{props.children}</BattleEventContext.Provider>;
}
