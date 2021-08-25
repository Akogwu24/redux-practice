import store from "./store";

import { bugAdded, bugRemoved, bugResolved } from "./actionCreators";

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch(bugAdded("Bug1"));

// store.dispatch(bugRemoved());

store.dispatch(bugResolved(1));

console.log(store.getState());
