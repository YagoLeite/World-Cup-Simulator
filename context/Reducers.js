export const CupReducer = (state, action) => {
  switch (action.type) {
    case "SCORE-UPDATE":
      const newGroupState = state.groupState.map((item) => {
        if (action.value.find((element) => element.name === item.name)) {
          const newIndex = action.value.findIndex(
            (element) => element.name === item.name
          );
          return {
            ...item,
            index: newIndex,
            oitavas: false,
            quartas: false,
            semi: false,
            final: false,
          };
        } else {
          return item;
        }
      });
      return { ...state, groupState: newGroupState };
    case "GROUP-UPDATE":
      return { ...state, group: action.value };
    case "OITAVAS-SELECTION":
      const oitavas = state.groupState.map((item) => {
        if (item.index <= 1 && item.group === action.value) {
          return { ...item, oitavas: true };
        } else {
          return item;
        }
      });
      return { ...state, groupState: oitavas };
    default:
      return state;
  }
};
