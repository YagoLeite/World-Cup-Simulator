export const CupReducer = (state, action) => {
  switch (action.type) {
    case "SCORE-UPDATE":
      return { ...state, [action.group]: "oi" };
    default:
      return state;
  }
};
