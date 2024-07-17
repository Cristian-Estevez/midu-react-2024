import { useReducer } from "react";
import { AUTO_LANGUAGE } from "../constants";
import { Action, FromLanguage, Language, State } from "../types.d";

const reducer = (state: State, action: Action) => {
  const { type } = action;

  if (type === "INTERCHANGE_LAGUAGES") {
    if (state.fromLanguage === AUTO_LANGUAGE) return state;
    const loading = state.fromText !== "";
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      loading: loading,
      result: "",
    };
  }

  if (type === "SET_FROM_LANGUAGE") {
    if (state.fromLanguage === action.payload) return state;
    const loading = state.fromText !== "";

    return {
      ...state,
      fromLanguage: action.payload,
      result: "",
      loading: loading,
    };
  }

  if (type === "SET_TO_LANGUAGE") {
    if (state.toLanguage === action.payload) return state;
    const loading = state.fromText !== "";

    return {
      ...state,
      toLanguage: action.payload,
      result: "",
      loading: loading,
    };
  }

  if (type === "SET_FROM_TEXT") {
    const loading = action.payload !== "";

    return {
      ...state,
      fromText: action.payload,
      result: "",
      loading: loading,
    };
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload,
    };
  }

  return state;
};

export function useTranslate(initialState: State) {
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState);

  const interchageLanguages = () => {
    dispatch({ type: "INTERCHANGE_LAGUAGES" });
  };

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: "SET_FROM_LANGUAGE", payload });
  };

  const setToLanguage = (payload: Language) => {
    dispatch({ type: "SET_TO_LANGUAGE", payload });
  };

  const setFromText = (payload: string) => {
    dispatch({ type: "SET_FROM_TEXT", payload });
  };

  const setResult = (payload: string) => {
    dispatch({ type: "SET_RESULT", payload });
  };

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchageLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  };
}
