import type { FC } from "react";
import "./button.scss";

type buttonStyles = "btn_basic" | "btn_style"

interface ButtonProps{
  styles?: buttonStyles,
  name: string,
  action: () => void
}

const Button: FC<ButtonProps> = ({ styles="btn_style",name,action }) => {
  return(
    <button className={"btn " + styles} onClick={action}>
      {name}
    </button>
  )
} 
export default Button;
