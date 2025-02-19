module.exports = {
  template: (variables, { tpl }) => tpl`
  
  ${variables.imports};
  import { oneOfType, bool, string, number } from 'prop-types';
  ${variables.interfaces};


  const ${variables.componentName} = (${variables.props}) => (
    ${variables.jsx}
  );

  ${variables.componentName}.propTypes = {
    color: string,
    height: oneOfType([string, number]),
    inline: bool,
    title: string,
    width: oneOfType([string, number]),
  };

  ${variables.componentName}.defaultProps = {
    color: "currentColor",
    height: undefined,
    inline: true,
    width: undefined,
    title: "Icon",
  };

  ${variables.componentName}.displayName = "${variables.componentName}";

  
  ${variables.exports};
  `,
  "icon": true,
  "memo": true,
  "ref": false,
  "index": true,
  "dimensions": false,
  "replaceAttrValues": {
    "Icon": "{props.title}",
    "none": "{props.color}",
    "#000": "{props.color}",
    "black": "{props.color}",
  },
  "ext": "jsx",
  "svgProps": {
    "width": "{props.width ?? props.inline ?  \"1em\" : \"100%\"}",
    "fill": "{props.color}",
    "focusable": false,
    "aria-hidden": true,
    "role": "img",
    "alt": "Icon",
  },
  "svgoConfig": {
    plugins: [{
      name: "removeViewBox",
      active: false,
    },
    {
      name: "removeDimensions",
      active: true,
    }],
  },
};
