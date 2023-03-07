import strategies from "./strategies";
import Link from "./link";
import LinkSub from "./linksub";
import LinkSup from "./linksup";
import Superscript from "./superscript";
import Subscript from "./subscript";


export default [
  {
    strategy: strategies.findLinkEntities,
    component: Link,
  },
  {
    strategy: strategies.findSubEntities,
    component: Subscript,
  },
  {
    strategy: strategies.findSupEntities,
    component: Superscript,
  },
  {
    strategy: strategies.findLinkSubEntities,
    component: LinkSub,
  },
  {
    strategy: strategies.findLinkSupEntities,
    component: LinkSup,
  },
];
