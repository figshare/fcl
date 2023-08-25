import { $getSelection, $isRangeSelection } from "lexical";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import { useCallback, useContext, useEffect, useState } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import { Button } from "@figshare/fcl/button";
import { OverlayContent, OverlayFooter } from "@figshare/fcl/overlay";
import { OverlayContext } from "@figshare/fcl/overlay/overlay";
import Input from "@figshare/fcl/input";
import GoToLinkLarge from "@figshare/fcl/icons/goToLink/large";
import LinkUnlinked from "@figshare/fcl/icons/link/unlinked";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { getSelectedNode, sanitizeUrl, makeURLAbsolute } from "./utils";
import styles from "./LinkEditor.css";


export function LinkEditor({ onClose }) {
  const [editor] = useLexicalComposerContext();
  const context = useContext(OverlayContext);
  const [linkUrl, setLinkUrl] = useState("");
  const [editedLinkUrl, setEditedLinkUrl] = useState("");
  const [textSelection, setTextSelection] = useState("");
  const [isInputInteracted, setInputInteracted] = useState(false);
  const [isEditMode, setEditMode] = useState(false);

  const title = isEditMode ? "Edit link" : "Add link";
  const hasMinimumLength = editedLinkUrl?.length >= 3;

  const updateLinkEditor = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();

      setTextSelection(selection.getTextContent());

      if ($isLinkNode(parent)) {
        setLinkUrl(parent.getURL());
      } else if ($isLinkNode(node)) {
        setLinkUrl(node.getURL());
      } else {
        setLinkUrl("");
      }
    }
  }, [editor]);

  useEffect(() => {
    editor?.getEditorState().read(() => {
      updateLinkEditor();
    });
  }, [editor, updateLinkEditor]);

  useEffect(() => {
    if (!linkUrl) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  }, [linkUrl]);

  const onUnlink = () => {
    editor?.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    setEditedLinkUrl("");
    onClose();
  };

  const onURLChange = (event) => {
    setInputInteracted(true);
    setEditedLinkUrl(event.target.value);
  };

  const onCancel = () => {
    setEditedLinkUrl(linkUrl);
    onClose();
  };

  const onSave = () => {
    if (editedLinkUrl) {
      editor?.dispatchCommand(
        TOGGLE_LINK_COMMAND,
        {
          url: makeURLAbsolute(sanitizeUrl(editedLinkUrl)),
          target: "_blank",
        }
      );
      setLinkUrl(editedLinkUrl);
    }
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

  const overlayId = context?.id ?? 0;
  const ariaTitle = `dialog-${overlayId}-title`;

  return (
    <>
      <OverlayContent>
        <div className={styles.header}>
          <h1 className={styles.title} id={ariaTitle}>{title}</h1>
          <Button
            Icon={GoToLinkLarge}
            disabled={!isEditMode}
            href={makeURLAbsolute(editedLinkUrl || linkUrl)}
            id="open-link-button"
            target="_blank"
            theme="secondaryAlt"
          >
            Open link
          </Button>
        </div>
        <div className={styles.section}>
          <span className={styles.label}>Text</span>
          {textSelection}
        </div>
        <div className={styles.section}>
          <span className={styles.label}>Link</span>
          <Input
            className={styles.input}
            lockLTR={true}
            placeholder="Add link URL here"
            type="text"
            value={isInputInteracted ? editedLinkUrl : (editedLinkUrl || linkUrl)}
            onChange={onURLChange}
            onKeyDown={monitorInputInteraction}
          />
        </div>
      </OverlayContent>
      <OverlayFooter className={styles.buttonsContainer}>
        <Button
          Icon={LinkUnlinked}
          disabled={!isEditMode}
          id="unlink-button"
          theme="tertiary"
          onClick={onUnlink}
        >
          Unlink
        </Button>
        <div className={styles.buttons}>
          <Button id="cancel-button" theme="secondaryAlt" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            className={styles.saveButton}
            disabled={!hasMinimumLength}
            theme="primary"
            onClick={onSave}
          >
            Save changes
          </Button>
        </div>
      </OverlayFooter>
    </>
  );
}


LinkEditor.propTypes = { onClose: PropTypes.func };

LinkEditor.defaultProps = { onClose: undefined };
