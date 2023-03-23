import withConsumer from "../../helpers/withConsumer";

import Context from "./context";


export { default as LinkingProvider } from "./provider";
export { default as LinkingObject } from "./object";
export { default as LinkingReference } from "./reference";
export { withLinkingObject, withLinkingReference } from "./hoc";

export const withLinkingContext = withConsumer(Context.Consumer, "linkingContext");
