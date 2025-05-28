import type { FC } from "react";

interface NavBarProps{
  list: Array<[string,string]> 
}

const NavBar: FC<NavBarProps> = ({ list }) => {
  return(
    <nav>
      <ul>
        {
          list.map((item) => <li>{item[0]}</li> )
        }
      </ul>
    </nav> 
  ) 
}

export default NavBar
