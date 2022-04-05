export const CupReducer = (state, action) => {
  switch (action.type) {
    case "SCORE-UPDATE":
      return { ...state, [action.group]: "oi" };
    case "GROUP-UPDATE":
      return { ...state, group: action.value };
    default:
      return state;
  }
};
