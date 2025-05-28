import type { FC } from "react";
import type { IRouterPath } from "../types/IRouterPath";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouterWrapper: FC<IRouterPath[]> = ({ list }) => {
  
  return(
    <BrowserRouter>
      <Routes>
        {
          list.map((pair) => <Route path={pair.path} element={pair.element}/>)
        }
      </Routes>
    </BrowserRouter>

  )
}

export default RouterWrapper;
