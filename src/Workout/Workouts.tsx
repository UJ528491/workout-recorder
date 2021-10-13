import { useWorkouts } from "./useWorkouts";
import { useCallback, useRef } from "react";
export default function Workouts() {
  const { workouts, addWorkout, reomoveWorkout } = useWorkouts();
  const newWorkoutRef = useRef<HTMLInputElement>(null);
  const onAddWorkout = useCallback(
    e => {
      e.preventDefault();
      if (newWorkoutRef.current) {
        addWorkout(newWorkoutRef.current.value);
        newWorkoutRef.current.value = "";
      }
    },
    [addWorkout]
  );
  return (
    <div>
      <h1>Workout List</h1>
      <form onSubmit={onAddWorkout}>
        <input type="text" ref={newWorkoutRef} />
      </form>
      {workouts.map(workout => (
        <div key={workout.id}>
          {workout.name}
          <button onClick={() => reomoveWorkout(workout.id)}>Remove</button>
        </div>
      ))}
      <button>➕</button>
    </div>
  );
}
