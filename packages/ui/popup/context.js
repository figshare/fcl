import { createContext } from "react";


export const { Provider, Consumer } = createContext({
  contentRef: null,
  contentNode: null,
  triggerRef: null,
  triggerNode: null,
  events: null,
  addEventsOnContent: false,
  isVisible: false,
  ariaRole: "",
});
