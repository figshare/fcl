import React from "react";
import { storiesOf } from "@storybook/react";
import Orcid from "@figshare/ui/icons/orcid/index";
import OrcidSmall from "@figshare/ui/icons/orcid/small";


const stories = storiesOf("Icons/Figshare", module);
stories.addParameters({ jest: ["icons/icons.test.jsx"] });

const Container = (props) => {
  const style = { display: "flex", margin: "48px", maxWidth: "700px", alignItems: "center" };

  return <div {...props} style={style} />;
};

stories.add("Orcid", () => (
  <Container>
    <Orcid style={ { width: "48px", height: "48px", margin: "0 24px" } } />
    <OrcidSmall style={ { width: "48px", height: "48px", margin: "0 24px" } } />
  </Container>
));
