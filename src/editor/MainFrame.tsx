import React, { ChangeEvent, useEffect, useState } from "react";
import "./mainframe.css";

export const MainFrame = () => {
  document.execCommand("defaultParagraphSeparator", false, "p");

  const [rowCountEditor, setRowCountEditor] = useState(1);
  const [rowCountPreview, setRowCountPreview] = useState(1);

  const renderEditorNumbers = () => {
    const keys = Array.from(new Array(rowCountEditor).keys());
    return keys.map((v) => {
      return (
        <p style={{ height: "24px" }} key={v}>
          {v + 1}
        </p>
      );
    });
  };

  useEffect(() => {
    renderEditorNumbers();
  }, [rowCountEditor]);

  return (
    <div className="flex flex-row flex-grow-1">
      <div className="flex-col flex-1">
        <h3>Editor</h3>
        <div
          style={{ height: "600px", overflow: "scroll" }}
          className="flex flex-row"
        >
          <div>{renderEditorNumbers()}</div>
          <div
            suppressContentEditableWarning
            contentEditable
            onKeyUp={(e) => console.log(e.key)}
            onInput={(event) => {
              console.log("SPLIT", event.currentTarget.childElementCount);
              /*setRowCountEditor(
                event.currentTarget.innerText.split("\n").length
              );*/
            }}
            className="textareaCSS"
            id="textareaWrap"
          >
            <p>
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col flex-1">
        <h3>Preview</h3>
        <textarea className="textareaCSS" rows={rowCountPreview} />
      </div>
    </div>
  );
};
