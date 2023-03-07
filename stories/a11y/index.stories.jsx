import React from "react";
import { storiesOf } from "@storybook/react";

import { ConsumerShowcase } from "./directConsumerAccess.stories";
import { FunctionChildrenShowcase } from "./functionChildren.stories";
import { HigherOrderContainersShowcase } from "./hoc.stories";
import { PropComponentShowcase } from "./propComponent.stories";


const stories = storiesOf("Utils/A11y/Aria liking", module);

stories.addParameters({
  jest: [
    "components/a11y/linking/index",
    "components/a11y/linking/helpers",
    "components/a11y/linking/hoc",
    "components/a11y/linking/object",
    "components/a11y/linking/provider",
    "components/a11y/linking/reference",
    "components/a11y/linking/storage",
  ],
  viewMode: "docs",
  previewTabs: { canvas: { hidden: true } },
});

stories.add("Component prop", () => <PropComponentShowcase />);
stories.add("Children function prop", () => <FunctionChildrenShowcase />);
stories.add("Higher order components", () => <HigherOrderContainersShowcase />);
stories.add("Using the consumer directly", () => <ConsumerShowcase />);
