import { useReducer, useRef, useEffect, useMemo } from "react";

import { describeToolsFromConfig } from "./utils";


const initialState = {
  formats: [],
  blocks: [],
  redo: false,
  undo: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "BATCH":
      return { ...state, ...action.payload };
    case "CAN_REDO":
      return { ...state, redo: action.payload };
    case "CAN_UNDO":
      return { ...state, undo: action.payload };
    default:
      return state;
  }
}

export function useToolbarState(config) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const tools = useMemo(() => describeToolsFromConfig(config), [config]);
  const stateRef = useRef(state);

  useEffect(() => {
    stateRef.current = state;
  }, [state, stateRef]);

  return { tools, state, dispatch, stateRef };
}
