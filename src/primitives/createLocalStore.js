import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";

function createLocalStore(initState, key) {
  const [state, setState] = createStore(initState);

  if (localStorage[key]) setState(JSON.parse(localStorage[key]));

  createEffect(() => (localStorage[key] = JSON.stringify(state)));

  return [state, setState];
}

export default createLocalStore;
