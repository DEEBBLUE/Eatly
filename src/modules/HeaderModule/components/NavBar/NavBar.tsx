import type { FC } from "react";
import "./navbar.scss"

interface NavBarProps{
  list: Array<[string,string]> 
}

const NavBar: FC<NavBarProps> = ({ list }) => {
  return(
    <nav className="header__navbar">
      <ul>
        {
          list.map((item) => <li>{item[0]}</li> )
        }
      </ul>
    </nav> 
  ) 
}

export default NavBar
