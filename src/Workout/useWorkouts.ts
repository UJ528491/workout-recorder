import { useReducer, useCallback } from "react";

interface workouts {
  id: number;
  text: string;
}
type ActionType =
  | {
      type: "ADD";
      text: string;
    }
  | {
      type: "REMOVE";
      id: number;
    };

const initialWorkouts: workouts[] = [];

export function useWorkouts() {
  const [workouts, dispatch] = useReducer(
    (state: workouts[], action: ActionType) => {
      switch (action.type) {
        case "ADD":
          return [...state, { id: state.length, text: action.text }];
        case "REMOVE":
          return state.filter(({ id }) => id !== action.id);
        default:
          throw new Error();
      }
    },
    initialWorkouts
  );

  const addWorkout = useCallback((text: string) => {
    dispatch({
      type: "ADD",
      text,
    });
  }, []);
  const reomoveWorkout = useCallback((id: number) => {
    dispatch({
      type: "REMOVE",
      id,
    });
  }, []);

  return { workouts, addWorkout, reomoveWorkout };
}

// const item = {
//   id: 123,
//   name: "pull up",
//   reps: 10,
//   sets: 5,
//   status: "good",
//   log: "perform 4sets",
// };
