import { IRouterPath } from "./types/IRouterPath"
import HomePage from "./pages/Home/HomePage"

export const RoutingList: IRouterPath[] = [
  {
    path: "/",
    element: <HomePage/> 
  }
]
