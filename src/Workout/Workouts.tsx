import { useWorkouts } from "./useWorkouts";
import { useCallback, useRef } from "react";
export default function Workouts() {
  const { workouts, addWorkout, reomoveWorkout } = useWorkouts();
  const newWorkoutRef = useRef<HTMLInputElement>(null);
  const onAddTodo = useCallback(
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
      <form onSubmit={onAddTodo}>
        <input type="text" ref={newWorkoutRef} />
      </form>
      {workouts.map(workout => (
        <div key={workout.id}>
          {workout.text}
          <button onClick={() => reomoveWorkout(workout.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
