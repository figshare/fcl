import React from "react";
import { storiesOf } from "@storybook/react";
import FigshareLogo from "@figshare/ui/icons/figshare/logo";
import FigshareText from "@figshare/ui/icons/figshare/text";
import FigshareFullLogo from "@figshare/ui/icons/figshare/index";


const Container = (props) => {
  const style = {
    display: "flex",
    margin: "48px",
    maxWidth: "700px",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return <div {...props} style={style} />;
};

const stories = storiesOf("Icons/Figshare", module);

stories.addParameters({
  figma: { url: "https://www.figma.com/file/DqdzP2GRlCnN9SF5m7s1tCCY/figshare-brand" },
  jest: ["icons/figshare/index.test.jsx"],
});

stories.add("Figshare", () => (
  <Container>
    <FigshareLogo animate={false} grayscale={false} />
    <br />
    <FigshareText />
    <br />
    <FigshareFullLogo />
  </Container>
));
