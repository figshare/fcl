import { create } from "@storybook/theming";
import { addons } from "@storybook/addons";

import logo from "./logo.png";


addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "figshare storybook",
    brandUrl: "https://figshare.com",
    brandImage: logo,
  }),
});
