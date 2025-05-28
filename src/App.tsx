import type { FC } from "react"
import RouterWrapper from "./wrappers/RouterWrapper"
import { RoutingList } from "./routingList"


const App: FC = () => {
  return (
    <>
      <RouterWrapper list={RoutingList}/>
    </>
  )
}

export default App
