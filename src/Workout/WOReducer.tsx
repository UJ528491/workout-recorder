export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newWorkouts = [...state.workOuts];
  }
};

export const defaultState = {
  workOuts: [{ id: [], name: "", reps: 0, sets: 0, status: "", log: "" }],
};
