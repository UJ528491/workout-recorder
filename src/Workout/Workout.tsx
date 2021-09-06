import React, { useState, useReducer } from "react";
import { reducer, defaultState } from "./woReducer";

export const Workout = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [workout, setWorkout] = useState([]);

  return (
    <div>
      <h1>Workout List</h1>
      <form>
        <input type="text" />
      </form>
    </div>
  );
};
