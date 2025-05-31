import type { FC } from "react";
import logo from "../../../../../assets/Logo.svg";
import "./logo.scss";

const Logo: FC = () => {
  return(
    <img 
      className="header__logo"
      src={logo} 
      alt="eatly logo"/>
  )
}
export default Logo;
