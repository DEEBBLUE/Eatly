import type { FC } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Logo from "../../components/Logo/Logo";
import "./style.scss";
import SheetList from "./components/SheetList/SheetList";

const FooterModule: FC = () => {
  return(
    <footer className="footer">
      <header className="footer__header">
        <Logo style="footer__logo"/> 
        <NavBar styles="footer__navbar"/>
      </header>
      <hr className="footer__hr"/>
      <div className="footer__sheetContainer">
        <p className="footer__sheetContainer-p">&copy; 2023 EATLY All Rights Reserved</p>
        <SheetList/>
      </div>
    </footer>
  )
} 

export default FooterModule;
