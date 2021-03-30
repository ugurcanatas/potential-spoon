import React from "react";
import { ShortcutCard } from "./shortcutsCard/ShortcutCard";
import { MainFrame } from "./editor/MainFrame";
import "./App.css";
import MarkdownLogo from "./assets/markdown_logo.svg";

function App() {
  return (
    <div className="App">
      <div className="toolbar flex flex-row justify-end pr-4 pt-4">
        <img className="logo relative p-5" src={MarkdownLogo} alt="logo" />
      </div>
      <ShortcutCard />
      <MainFrame />
    </div>
  );
}

export default App;
