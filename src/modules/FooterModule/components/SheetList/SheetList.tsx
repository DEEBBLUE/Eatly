import type { FC } from "react";
import instagram from "../../../../../assets/SheetIcon/Intagram.svg";
import linkedin from "../../../../../assets/SheetIcon/LinkedIn.svg";
import facebook from "../../../../../assets/SheetIcon/Facebook.svg";
import twitter from "../../../../../assets/SheetIcon/Twitter.svg";
import "./sheetList.scss";

const SheetList: FC = () => {
  return(
    <div className="sheetList__container">
      <img className="sheetList__container-img" src={instagram} alt="instagram"/>
      <img className="sheetList__container-img" src={linkedin} alt="linkedin"/>
      <img className="sheetList__container-img" src={facebook} alt="facebook"/>
      <img className="sheetList__container-img" src={twitter} alt="twitter"/>
    </div>
  )
} 

export default SheetList;
