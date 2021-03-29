import React, { useState } from "react";
import "./card.css";
import { CustomButton } from "../smallComponents/CustomButton";

const dataHeadings = [
  {
    key: "h1",
    text: "Heading 1",
  },
  {
    key: "h2",
    text: "Heading 2",
  },
  {
    key: "h3",
    text: "Heading 3",
  },
];

export const ShortcutCard = () => {
  const [inputHeader, setInputHeader] = useState("h1");
  const [todoNestingValue, setTodoNestingValue] = useState("1");
  const [todoCountValue, setTodoCountValue] = useState("1");
  const [tableRow, setTableRow] = useState("1");
  const [tableColumn, setTableColumn] = useState("1");

  const getHeaderValue = () => {
    console.log("Get header", inputHeader);
  };

  const getTodoValue = () => {
    console.log("Getting todo value");
  };

  return (
    <div>
      <a
        className="btnShortcutCardToggle material-icons shadow-xl bg-green-700 hover:bg-indigo-700 transition-colors"
        color="#9861f1"
        href="# "
      >
        <span className="text-white">visibility</span>
      </a>
      <div className="shortcutCard shadow-lg p-6">
        <div className="flex flex-col">
          <h2 className="text-4xl font-medium">Shortcuts</h2>
          <div className="seperator my-4" />
        </div>
        <div className="flex flex-col mb-4">
          <select
            value={inputHeader}
            onChange={(e) => setInputHeader(e.target.value)}
            className="customInput"
            name="pets"
            placeholder="Add header"
            id="pet-select"
          >
            {dataHeadings.map((v) => {
              return (
                <option key={v.key} value={v.key}>
                  {v.text}
                </option>
              );
            })}
          </select>
          <div className="flex mt-4">
            <CustomButton
              color="#476CEF"
              hoverColor="#385BD7"
              icon="text_fields"
              text="Add Heading"
              listener={() => getHeaderValue()}
            />
          </div>
        </div>
        <div className="seperator my-8" />
        <div className="flex flex-col mb-4">
          <div className="flex flex-row">
            <div className="flex-col flex">
              <label>Nesting</label>
              <input
                min="1"
                onChange={(e) => setTodoNestingValue(e.target.value)}
                type="number"
                className="customInput mr-2"
                value={todoNestingValue}
                placeholder="Nesting"
              />
            </div>
            <div className="flex-col flex">
              <label>Count</label>
              <input
                min="1"
                onChange={(e) => setTodoCountValue(e.target.value)}
                type="number"
                className="customInput ml-2"
                value={todoCountValue}
                placeholder="Count"
              />
            </div>
          </div>
          <div className="flex mt-4">
            <CustomButton
              color="#DF5CAB"
              hoverColor="#BF3E8C"
              icon="check_box"
              text="Add Todo"
              listener={() => getTodoValue()}
            />
          </div>
        </div>
        <div className="seperator my-8" />
        <div className="flex flex-col mb-4">
          <div className="flex flex-row">
            <div className="flex-col flex">
              <label>Row</label>
              <input
                min="1"
                onChange={(e) => setTableRow(e.target.value)}
                type="number"
                className="customInput mr-2"
                value={tableRow}
                placeholder="Row"
              />
            </div>
            <div className="flex-col flex">
              <label>Column</label>
              <input
                min="1"
                onChange={(e) => setTableColumn(e.target.value)}
                type="number"
                className="customInput ml-2"
                value={tableColumn}
                placeholder="Column"
              />
            </div>
          </div>
          <div className="flex mt-4">
            <CustomButton
              color="#57BE68"
              hoverColor="#44A754"
              icon="calendar_view_month"
              text="Add Table"
              listener={() => getTodoValue()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
