import type { FC } from "react";
import "./navbar.scss"
import { NavBarList } from "./NavBarList.ts"

const NavBar: FC= () => {
  return(
    <nav className="header__navbar">
      <ul>
        {
          NavBarList.map((item) => <li>{item[0]}</li> )
        }
      </ul>
    </nav> 
  ) 
}

export default NavBar
