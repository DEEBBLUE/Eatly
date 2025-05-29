import type { FC } from "react"
import RouterWrapper from "./wrappers/RouterWrapper"
import { RoutingList } from "./routingList"
import './index.scss'


const App: FC = () => {
  return (
    <>
      <RouterWrapper list={RoutingList}/>
    </>
  )
}

export default App
