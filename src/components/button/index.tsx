import React from "react";

import style from "./Button.module.scss";

export default class Button extends React.Component<{
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button 
        className={style.button} 
        type={type} 
        onClick={onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
