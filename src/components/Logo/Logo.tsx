import type { FC } from "react";
import logo from "../../../../../assets/Logo.svg";
import "./logo.scss";

type logoStyle = "header__logo" | "footer__logo"

interface LogoProps{
  style: logoStyle 
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
