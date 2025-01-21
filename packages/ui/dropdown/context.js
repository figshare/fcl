import { createContext } from "react";


const Context = createContext({
  menuRef: null,
  menuNode: null,
  toggleRef: null,
  toggleNode: null,
  isVisible: false,
  onToggle: null,
});

export const { Provider, Consumer } = Context;
export default Context;
