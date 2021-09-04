import { useReducer } from "react";
import "./App.css";

import { reducer } from "./components/reducer";

const defaultState = { count: 0, multiply: 2 };

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "INCREASE" })}>increase</button>
      <h1>{state.count}</h1>
      {/* <hr style={{ width: "2", border: "2px solid red" }} /> */}
      <h1>{state.multiply}</h1>
      <button onClick={() => dispatch({ type: "DECREASE" })}>decrease</button>
    </div>
  );
};
export default App;
