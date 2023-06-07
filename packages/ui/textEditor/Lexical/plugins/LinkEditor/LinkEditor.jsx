import { $getSelection, $isRangeSelection } from "lexical";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import { useCallback, useEffect, useRef, useState } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Button } from "@figshare/fcl/button";

import { getSelectedNode, sanitizeUrl } from "./utils";
import OpenLinkIcon from "./components/OpenLinkIcon";
import UnlinkIcon from "./components/UnlinkIcon";
import styles from "./LinkEditor.css";


export function LinkEditor({
  activeEditor,
  onClose,
}) {
  const editorRef = useRef(null);
  const inputRef = useRef(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [editedLinkUrl, setEditedLinkUrl] = useState("");
  const [isEditMode, setEditMode] = useState(false);

  const title = isEditMode ? "Edit link" : "Add link";
  const hasMinimumLength = editedLinkUrl?.length >= 3;

  const updateLinkEditor = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent)) {
        setLinkUrl(parent.getURL());
      } else if ($isLinkNode(node)) {
        setLinkUrl(node.getURL());
      } else {
        setLinkUrl("");
      }
    }
  }, [activeEditor]);

  useEffect(() => {
    activeEditor?.getEditorState().read(() => {
      updateLinkEditor();
    });
  }, [activeEditor, updateLinkEditor]);

  useEffect(() => {
    if (!linkUrl) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  }, [linkUrl]);

  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  const renderOpenLinkButton = () => {
    if (!isEditMode) {
      return null;
    }

    return (
      <Button className={styles.buttonOpenLink} href={editedLinkUrl || linkUrl} target="_blank">
        <OpenLinkIcon className={styles.icon} /> Open link
      </Button>
    );
  };

  const onUnlink = () => {
    activeEditor?.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    setEditedLinkUrl("");
    onClose();
  };

  const renderUnlinkButton = () => {
    if (!isEditMode) {
      return null;
    }

    return (
      <Button className={styles.buttonUnlink} onClick={onUnlink}>
        <UnlinkIcon className="icon" /> Unlink
      </Button>
    );
  };

  const onURLChange = (event) => {
    setEditedLinkUrl(event.target.value);
  };

  const onCancel = () => {
    setEditedLinkUrl(linkUrl);
    onClose();
  };

  const onSave = () => {
    activeEditor?.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl(editedLinkUrl));
    setLinkUrl(editedLinkUrl);
    onClose();
  };

  const monitorInputInteraction = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSave();
    } else if (event.key === "Escape") {
      event.preventDefault();
      onCancel();
    }
  };

  return (
    <div ref={editorRef} className={styles.modalShadow}>
      <div className={styles.modalContainer}>
        <div>
          <span className={styles.title}>{title}</span>
          <div className={styles.linkContainer}>
            <span className={styles.linkLabel}>Link</span>
            {renderOpenLinkButton()}
          </div>
        </div>
        <input
          ref={inputRef}
          className={styles.input}
          placeholder="add link url here"
          type="text"
          value={editedLinkUrl ? editedLinkUrl : linkUrl}
          onChange={onURLChange}
          onKeyDown={monitorInputInteraction}
        />
        <div className={styles.buttonsContainer}>
          {renderUnlinkButton()}
          <Button className={styles.buttonCancel} onClick={onCancel}>
            Cancel
          </Button>
          <Button
            className={classnames(styles.buttonSave, { [styles.focusBtn]: !hasMinimumLength })}
            disabled={!hasMinimumLength}
            onClick={onSave}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}


LinkEditor.propTypes = {
  activeEditor: PropTypes.object,
  onClose: PropTypes.func,
};

LinkEditor.defaultProps = {
  activeEditor: {},
  onClose: undefined,
};
