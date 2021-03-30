import React, { useEffect, useState } from "react";
import "./mainframe.css";

export const MainFrame = () => {
  document.execCommand("defaultParagraphSeparator", false, "p");

  const [rowCountEditor, setRowCountEditor] = useState(1);
  const [rowCountPreview, setRowCountPreview] = useState(1);

  const renderEditorNumbers = () => {
    const keys = Array.from(new Array(rowCountEditor).keys());
    return keys.map((v) => {
      return (
        <p className="px-4 bg-gray-200" key={v}>
          {v + 1}
        </p>
      );
    });
  };

  useEffect(() => {
    renderEditorNumbers();
  }, [rowCountEditor]);

  const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      const a = document.getElementById("textareaWrap");
      if (a !== null) {
        setRowCountEditor(a.childNodes.length);
      }
    }
  };

  const onPaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const a = document.getElementById("textareaWrap");
    if (a !== null) {
      setRowCountEditor(a.childNodes.length);
    }
    //prevent default behaviour
    e.preventDefault();
    let clipboardText = e.clipboardData.getData("text/plain");
    console.log("OnPaste", clipboardText);
    clipboardText = clipboardText.replace(/(?:\\[rn]|[\r\n]+)+/g, "\n");
    document.execCommand("insertText", false, clipboardText);
  };

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
            onKeyUp={(e) => onKeyUp(e)}
            onPaste={(e) => onPaste(e)}
            className="textareaCSS px-2"
            id="textareaWrap"
          >
            <p>
              <br />
            </p>
          </div>
        </div>
      </div>
      {/*<div className="flex-col flex-1">
        <h3>Preview</h3>
        <AceEditor theme="github" name="CUSTOM" />
      </div>*/}
    </div>
  );
};
