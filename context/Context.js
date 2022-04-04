import { createContext, useContext, useReducer } from "react";
import { CupReducer } from "./Reducers";

const Cup = createContext();

const CupContext = ({ children }) => {
  const [state, dispatch] = useReducer(CupReducer, {
    groupA: {
      qatar: {
        name: "Qatar",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
      ecuador: {
        name: "Ecuador",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
      senegal: {
        name: "Senegal",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
      netherlands: {
        name: "Netherlands",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
    },
    groupB: {
      england: {
        name: "England",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
      iran: {
        name: "Iran",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
      usa: {
        name: "USA",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
      cu: {
        name: "CU",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
    },
  });
  return <Cup.Provider value={{ state, dispatch }}>{children}</Cup.Provider>;
};

export const CupState = () => {
  return useContext(Cup);
};

export default CupContext;
