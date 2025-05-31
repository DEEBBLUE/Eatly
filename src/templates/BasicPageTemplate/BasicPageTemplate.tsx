import type { FC, ReactNode } from "react";
import HeaderModule from "../../modules/HeaderModule/HeaderModule";


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
    </>
  )
}

export default BasicPageTemplate;
