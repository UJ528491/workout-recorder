import { useReducer, useCallback } from "react";

interface workouts {
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
      reps: number;
      sets: number;
      status: string;
      log?: string;
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
        case "SET":
          return state.map(workout => {
            if (workout.id === action.id) {
              return {
                ...workout,
                reps: action.reps,
                sets: action.sets,
                status: action.status,
                log: action.log,
              };
            }
            return workout;
          });
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
  const removeWorkout = useCallback((id: number) => {
    dispatch({
      type: "REMOVE",
      id,
    });
  }, []);
  const setWorkout = useCallback(
    (id: number, reps: number, sets: number, status: string, log?: string) => {
      dispatch({
        type: "SET",
        id,
        reps,
        sets,
        status,
        log,
      });
    },
    []
  );

  return { workouts, addWorkout, removeWorkout, setWorkout };
}

// const item = {
//   id: 123,
//   name: "pull up",
//   reps: 10,
//   sets: 5,
//   status: "good",
//   log: "perform 4sets",
// };
