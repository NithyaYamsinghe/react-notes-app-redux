const notes = (state = [], action) => {
  switch (action.type) {
    case "TOGGLE_NOTES":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.id ? { ...note, completed: !note.completed } : note
        ),
      };
    default:
      return state;
  }
};

export default notes;
