import { INSERT_UNORDERED_LIST_COMMAND, INSERT_ORDERED_LIST_COMMAND, REMOVE_LIST_COMMAND } from "@lexical/list";


const commands = {
  ul: INSERT_UNORDERED_LIST_COMMAND,
  ol: INSERT_ORDERED_LIST_COMMAND,
};

export default function operation({ tool, state, editor }) {
  const { type } = tool;
  const current = state.list;

  if (current === type) {
    editor.dispatchCommand(REMOVE_LIST_COMMAND);
  } else {
    editor.dispatchCommand(commands[type]);
  }
}
