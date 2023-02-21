import React from "react";
import { storiesOf } from "@storybook/react";
import NavigableList from "@figshare/ui/helpers/navigableList";


const stories = storiesOf("UI/NavigableList", module);


stories.addParameters({ jest: ["components/navigableList"] });

const renderContent = ({ ref, ...passedProps }) => (
  <div ref={ref} {...passedProps}>
    <button>Child 1</button>
    <button>Child 2</button>
    <button>Child 3</button>
  </div>
);

stories.add("showcase", () => {
  const containerStyle = {
    margin: "calc(3 * var(--gridSize))",
    padding: "calc(3 * var(--gridSize))",
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <div style={containerStyle}>
      <h1 style={ { margin: 0, width: "100%" } }>
        NavigableList
      </h1>

      <hr />

      <h2 style={ { margin: 0, width: "100%" } }>
        NavigableList - horizontal
      </h2>
      <NavigableList navigationType="horizontal">
        {renderContent}
      </NavigableList>

      <hr />

      <h2 style={ { margin: 0, width: "100%" } }>
        NavigableList - vertical
      </h2>
      <NavigableList>
        {renderContent}
      </NavigableList>
    </div>
  );
});
