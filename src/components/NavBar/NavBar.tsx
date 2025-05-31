import type { FC } from "react";
import "./navbar.scss"
import { NavBarList } from "./NavBarList.ts"

type navBarStyles = "header__navbar" | "footer__navbar"

interface NavBarProps{
  styles: navBarStyles 
}

const NavBar: FC<NavBarProps> = ({ styles }) => {
  return(
    <nav className={"navbar" + styles}>
      <ul>
        {
          NavBarList.map((item) => <li>{item[0]}</li> )
        }
      </ul>
    </nav> 
  ) 
}

export default NavBar
