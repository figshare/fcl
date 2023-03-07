import React from "react";
import { storiesOf } from "@storybook/react";
import Facebook from "@figshare/ui/icons/socialMedia/facebook";
import Linkedin from "@figshare/ui/icons/socialMedia/linkedin";
import Twitter from "@figshare/ui/icons/socialMedia/twitter";
import TwitterInverted from "@figshare/ui/icons/socialMedia/twitter_inverted";
import Vimeo from "@figshare/ui/icons/socialMedia/vimeo";


const stories = storiesOf("Icons/Figshare", module);
stories.addParameters({ jest: ["@figshare/ui/icons/icons.test.jsx"] });

const Container = (props) => {
  const style = {
    display: "flex",
    margin: "calc(8 * var(--gridSize))",
    maxWidth: "700px",
    alignItems: "center",
  };

  return <div {...props} style={style} />;
};

const iconStyle = {
  width: "calc(5 * var(--gridSize))",
  height: "calc(5 * var(--gridSize))",
  margin: "0 calc(4 * var(--gridSize))",
};

stories.add("Social media", () => (
  <Container>
    <Facebook fill="black" style={iconStyle} />
    <Linkedin fill="black" style={iconStyle} />
    <Twitter fill="black" style={iconStyle} />
    <TwitterInverted fill="black" style={iconStyle} />
    <Vimeo fill="black" style={iconStyle} />
  </Container>
));
