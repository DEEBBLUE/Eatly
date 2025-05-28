import type { FC } from "react";
import NavBar from "./components/NavBar/NavBar";
import { NavBarList } from "./NavBarList";

const HeaderModule: FC = () => {

  return(
    <>
      <NavBar list={NavBarList}/> 
    </>
  )
}

export default HeaderModule;
