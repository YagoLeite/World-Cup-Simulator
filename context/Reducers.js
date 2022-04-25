import { initialState } from "../components/initialState";
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
            winner: false,
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
          return {
            ...item,
            oitavas: true,
            quartas: false,
            semi: false,
            finals: false,
            winner: false,
          };
        } else {
          return item;
        }
      });
      return { ...state, groupState: oitavas };
    case "QUARTAS-SELECTION":
      const quartas = state.groupState.map((item) => {
        if (item.name === action.payload.firstTeam.name) {
          return {
            ...item,
            quartas: true,
            semi: false,
            final: false,
            winner: false,
          };
        } else if (item.name === action.payload.secondTeam.name) {
          return {
            ...item,
            quartas: false,
            semi: false,
            final: false,
            winner: false,
          };
        } else {
          return item;
        }
      });
      return { ...state, groupState: quartas };
    case "SEMI-SELECTION":
      const semi = state.groupState.map((item) => {
        if (item.name === action.payload.firstTeam.name) {
          return { ...item, semi: true, final: false, winner: false };
        } else if (item.name === action.payload.secondTeam.name) {
          return { ...item, semi: false, final: false, winner: false };
        } else {
          return item;
        }
      });
      return { ...state, groupState: semi };
    case "FINAL-SELECTION":
      const final = state.groupState.map((item) => {
        if (item.name === action.payload.firstTeam.name) {
          return { ...item, final: true, winner: false };
        } else if (item.name === action.payload.secondTeam.name) {
          return { ...item, final: false, winner: false };
        } else {
          return item;
        }
      });
      return { ...state, groupState: final };
    case "WINNER-SELECTION":
      const winner = state.groupState.map((item) => {
        if (item.name === action.payload.firstTeam.name) {
          return { ...item, winner: true };
        } else if (item.name === action.payload.secondTeam.name) {
          return { ...item, winner: false };
        } else {
          return item;
        }
      });
      return { ...state, groupState: winner };
    case "CONFIRM-ALL":
      const all = state.groupState.map((item) => {
        if (item.index <= 1) {
          return {
            ...item,
            oitavas: true,
            quartas: false,
            semi: false,
            finals: false,
            winner: false,
          };
        } else {
          return item;
        }
      });
      return { ...state, groupState: all };
    case "UI-UPDATE":
      return { ...state, ui: action.value };
    case "LOADING":
      return action.value;
    case "CLEAR":
      return {
        group: "A",
        groupState: initialState,
        ui: "groups",
      };
    default:
      return state;
  }
};
