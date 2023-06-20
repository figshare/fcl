import { REDO_COMMAND, UNDO_COMMAND } from "lexical";


const commands = {
  undo: UNDO_COMMAND,
  redo: REDO_COMMAND,
};

export default function operation({ tool, editor }) {
  editor.dispatchCommand(commands[tool.type]);
}
