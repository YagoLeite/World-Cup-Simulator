import { createContext, useContext, useReducer } from "react";
import { CupReducer } from "./Reducers";
import { initialState } from "../components/initialState";

const Cup = createContext();

const CupContext = ({ children }) => {
  const [state, dispatch] = useReducer(CupReducer, {
    group: "A",
    groupState: initialState,
  });
  return <Cup.Provider value={{ state, dispatch }}>{children}</Cup.Provider>;
};

export const CupState = () => {
  return useContext(Cup);
};

export default CupContext;
