export const CupReducer = (state, action) => {
  switch (action.type) {
    case "SCORE-UPDATE":
      // return {
      //   ...state,
      //   groupState: state.groupState.map((country) => {
      //     if (country.name === action.payload.scoringTeam) {
      //       return {
      //         ...country,
      //         goalsFor: country.goalsFor + +action.payload.value,
      //       };
      //     } else if (country.name === action.payload.receivingTeam) {
      //       return {
      //         ...country,
      //         goalsAgainst: country.goalsAgainst - +action.payload.value,
      //       };
      //     } else {
      //       return country;
      //     }
      //   }),
      // };
      return { ...state };
    case "GROUP-UPDATE":
      return { ...state, group: action.value };
    default:
      return state;
  }
};
