import { RouterProvider } from "react-router-dom"
import { Element } from "./router/routes"

const App = () => {
  return (
      <RouterProvider router={Element}/>
  )
}

export default App