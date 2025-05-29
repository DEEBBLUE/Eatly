import type { FC, ReactNode } from "react";
import HeaderModule from "../../modules/HeaderModule/HeaderModule";
import "./basicPageTemplate.scss"


interface BasicPageTemplateProps{
  children: ReactNode
}

const BasicPageTemplate: FC<BasicPageTemplateProps> = ({ children }) => {
  return(
    <>
      <div className="header__container">
        <HeaderModule/>
      </div>
      { children }
    </>
  )
}

export default BasicPageTemplate;
