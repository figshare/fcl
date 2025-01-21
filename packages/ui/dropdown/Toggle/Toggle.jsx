import { useContext } from "react";
import { func } from "prop-types";

import Context from "../context";


const DropdownToggle = ({ children, ...props }) => {
  const context = useContext(Context);

  const { isVisible, onToggle, toggleRef } = context;

  return children({
    isVisible,
    onToggle,
    props: {
      ref: toggleRef,
      "aria-haspopup": true,
      "aria-expanded": !!isVisible,
      role: "option",
    },
    ...props,
  });
};

DropdownToggle.propTypes = { children: func.isRequired };

export default DropdownToggle;
