import type { FC, ReactNode } from "react";
import HeaderModule from "../../modules/HeaderModule/HeaderModule";


interface BasicPageTemplateProps{
  children: ReactNode
}

const BasicPageTemplate: FC<BasicPageTemplateProps> = ({ children }) => {
  return(
    <>
      <HeaderModule/>
      { children }
    </>
  )
}

export default BasicPageTemplate;
