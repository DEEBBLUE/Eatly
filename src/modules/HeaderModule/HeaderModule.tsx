import type { FC } from "react";
import NavBar from "./components/NavBar/NavBar";
import { NavBarList } from "./NavBarList";
import "./style.scss"

const HeaderModule: FC = () => {
  return(
    <header>
      <NavBar list={NavBarList}/> 
    </header>
  )
}

export default HeaderModule;
