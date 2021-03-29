import React from "react";
import { ShortcutCard } from "./shortcutsCard/ShortcutCard";
import "./App.css";
import MarkdownLogo from "./assets/markdown_logo.svg";

function App() {
  return (
    <div className="App">
      <img
        className="logo absolute right-4 top-4"
        src={MarkdownLogo}
        alt="logo"
      />
      <ShortcutCard />
    </div>
  );
}

export default App;
