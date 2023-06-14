
import IconSet from "../../../../icons/editor";
import { ToolbarItemType, ToolbarSections } from "../../constants";


export function getToolLabelAndIcon(type, group) {
  let label = "Unknown Tool";

  try {
    label = ToolbarSections[group].names[type];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("Unknown tool", type, "for group", group);
  }

  const IconName = type.charAt(0).toUpperCase() + type.slice(1);
  const icon = IconSet[IconName];

  return { label, icon };
}

export function describeToolsFromConfig(config) {
  return config.reduce((result, item) => {
    const { type, name } = item;

    const section = result.sections[type];

    const { label, icon } = getToolLabelAndIcon(name, type);

    if (section) {
      section.tools.push({ type: name, group: type, label, icon });
    } else {
      result.order.push(type);
      result.sections[type] = {
        type,
        tools: [{ type: name, group: type, label, icon }],
      };
    }


    return result;
  }, { order: [], sections: {} });
}

export function describeSelectionFormats(selection) {
  const formats = [];
  const supported = [...ToolbarSections.richText.types, ...ToolbarSections.script.types];

  supported.forEach((format) => {
    try {
      const has = selection.hasFormat(format);

      if (has) {
        formats.push(format);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log("hasFormat does not have format", format, selection);
    }
  });

  return formats;
}

export function checkIfToolIsActive(tool, state) {
  switch (tool.group) {
    case "script":
    case "richText":
      return state.formats.includes(tool.type);
    case "list":
      return state.list === tool.type;
    case "block":
      return state.block === tool.type;
    default:
      return false;
  }
}

export function checkIfToolIsDisabled(tool, state) {
  switch (tool.group) {
    case ToolbarItemType.Link:
      return !state.hasSelection;
    case ToolbarItemType.History:
      return !state[tool.type];
    default:
      return false;
  }
}

export function describeExcludedTypes(type, group, selectionFormats) {
  if (group === "script") {
    return ToolbarSections.script.types.filter((t) => t !== type && selectionFormats.includes(t));
  }

  return [];
}
