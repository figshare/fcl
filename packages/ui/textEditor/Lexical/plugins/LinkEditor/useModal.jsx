import { useCallback, useMemo, useState } from "react";
import * as React from "react";
import { Overlay } from "@figshare/fcl/overlay";

import styles from "./useModal.css";


export default function useModal() {
  const [modalContent, setModalContent] = useState(null);

  const onClose = useCallback(() => {
    setModalContent(null);
  }, []);

  const modal = useMemo(() => {
    if (modalContent === null) {
      return null;
    }

    const { title, content, isVisible } = modalContent;

    return (
      <Overlay
        classNameContainer={styles.editorOverlayContainer}
        isVisible={isVisible}
        portalNode='div[data-id="editor-content-editable"]'
        title={title}
        onClose={onClose}
      >
        {content}
      </Overlay>
    );
  }, [modalContent, onClose]);

  const showModal = useCallback(
    (
      title,
      getContent,
      isVisible = true,
    ) => {
      setModalContent({
        isVisible,
        content: getContent(onClose),
        title,
      });
    },
    [onClose],
  );

  return [modal, showModal];
}
