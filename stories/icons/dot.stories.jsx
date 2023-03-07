import React from "react";
import { storiesOf } from "@storybook/react";
import Dot from "@figshare/ui/icons/dot/index";


const stories = storiesOf("Icons/Figshare", module);
stories.addParameters({ jest: ["icons/icons.test.jsx"] });

const Container = (props) => {
  const style = { display: "flex", margin: "48px", maxWidth: "700px", alignItems: "center" };

  return <div {...props} style={style} />;
};

stories.add("Dot", () => (
  <Container>
    <Dot fill="black" style={ { width: "24px", height: "24px", margin: "0 24px" } } />
  </Container>
));
