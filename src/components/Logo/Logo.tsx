import type { FC } from "react";
import logo from "../../../../../assets/Logo.svg";
import "./logo.scss";

interface LogoProps{
  style: string
}

const Logo: FC<LogoProps> = ({ style }) => {
  return(
    <img 
      className={style}
      src={logo} 
      alt="eatly logo"/>
  )
}
export default Logo;
