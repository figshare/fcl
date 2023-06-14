import React from "react";

import { LinkEditor } from "../../LinkEditor/LinkEditor";


export default function operation({ state, callbacks }) {
  const { hasSelection } = state;

  if (hasSelection) {
    callbacks.showModal((onClose) => (
      <LinkEditor
        onClose={onClose}
      />
    ));
  }
}
