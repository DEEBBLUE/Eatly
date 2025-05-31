import type { FC } from "react";
import NavBar from "./components/NavBar/NavBar";
import { NavBarList } from "./NavBarList";
import "./style.scss"
import Logo from "./components/Logo/Logo";

const HeaderModule: FC = () => {
  return(
    <header className="header">
      <div className="header__menuContainer">
        <Logo/>
        <NavBar list={NavBarList}/> 
      </div>
    </header>
  )
}

export default HeaderModule;
