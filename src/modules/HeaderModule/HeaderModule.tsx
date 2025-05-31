import type { FC } from "react";
import NavBar from "./components/NavBar/NavBar";
import { NavBarList } from "./NavBarList";
import "./style.scss";
import Logo from "../../components/Logo/Logo";
import Auth from "./components/Auth/Auth";

const HeaderModule: FC = () => {
  return(
    <header className="header">
      <div className="header__menuContainer">
        <div className="header__menuContainer-left">
          <Logo style="header__logo"/>
          <NavBar list={NavBarList}/>
        </div>
        <div className="header__menuContainer-rigth">
          <Auth/>
        </div>
      </div>
      <hr className="header__hr"/>
    </header>
  )
}

export default HeaderModule;
