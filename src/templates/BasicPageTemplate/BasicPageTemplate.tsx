import type { FC, ReactNode } from "react";
import HeaderModule from "../../modules/HeaderModule/HeaderModule";
import FooterModule from "../../modules/FooterModule/FooterModule";

interface BasicPageTemplateProps{
  children: ReactNode
}

const BasicPageTemplate: FC<BasicPageTemplateProps> = ({ children }) => {
  return(
    <>
      <HeaderModule/>
      <main>
        { children }
      </main>
      <FooterModule/>
    </>
  )
}

export default BasicPageTemplate;
