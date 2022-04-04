import { createContext, useContext, useReducer } from "react";
import { CupReducer } from "./Reducers";

const Cup = createContext();

const CupContext = ({ children }) => {
  const [state, dispatch] = useReducer(CupReducer, {
    groupA: [
      {
        name: "Qatar",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
      {
        name: "Ecuador",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
      {
        name: "Senegal",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
      {
        name: "Netherlands",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
    ],
    groupB: [
      {
        name: "England",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
      {
        name: "Iran",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
      {
        name: "USA",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
      {
        name: "CU",
        points: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        saldo: 0,
      },
    ],
  });
  return <Cup.Provider value={{ state, dispatch }}>{children}</Cup.Provider>;
};

export const CupState = () => {
  return useContext(Cup);
};

export default CupContext;
