import React, { useEffect, useState } from "react";
import "./customBtn.css";

interface CustomButtonProps {
  text: string;
  color: string;
  hoverColor: string;
  icon: string;
  listener: () => void;
}

export const CustomButton = (props: CustomButtonProps) => {
  const [hoverState, setHoverState] = useState(false);
  const [bgColor, setBGColor] = useState(props.color);

  useEffect(() => {
    if (hoverState) {
      setBGColor(props.hoverColor);
    } else {
      setBGColor(props.color);
    }
  }, [hoverState, props.color, props.hoverColor]);

  const style = {
    btnDefault: {
      backgroundColor: bgColor,
    },
  };

  return (
    <button
      className="customDefault flex-grow"
      style={style.btnDefault}
      onClick={props.listener}
      onMouseOver={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <span className="material-icons pr-4">{props.icon}</span>
      <span className="pl-4">{props.text}</span>
    </button>
  );
};
