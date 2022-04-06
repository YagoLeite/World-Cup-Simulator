export const CupReducer = (state, action) => {
  switch (action.type) {
    case "SCORE-UPDATE":
      const newGroupState = state.groupState.map((item) => {
        if (action.value.find((element) => element.name === item.name)) {
          const newIndex = action.value.findIndex(
            (element) => element.name === item.name
          );
          return { ...item, index: newIndex };
        } else {
          return item;
        }
      });
      return { ...state, groupState: newGroupState };
    case "GROUP-UPDATE":
      return { ...state, group: action.value };
    default:
      return state;
  }
};
