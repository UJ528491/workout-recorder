import { useReducer, useCallback } from "react";

interface workouts {
  id: number;
  name: string;
}
interface workoutProgram extends workouts {
  id: number;
  name: string;
  reps?: number;
  sets?: number;
  status?: string;
  log?: string;
}
type ActionType =
  | {
      type: "ADD";
      name: string;
    }
  | {
      type: "REMOVE";
      id: number;
    }
  | {
      type: "SET";
      id: number;
    };

const initialWorkouts: workouts[] = [];

export function useWorkouts() {
  const [workouts, dispatch] = useReducer(
    (state: workouts[], action: ActionType) => {
      switch (action.type) {
        case "ADD":
          return [...state, { id: state.length, name: action.name }];
        case "REMOVE":
          return state.filter(({ id }) => id !== action.id);
        default:
          throw new Error();
      }
    },
    initialWorkouts
  );

  const addWorkout = useCallback((name: string) => {
    dispatch({
      type: "ADD",
      name,
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
