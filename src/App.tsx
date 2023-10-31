import { RouterProvider } from "react-router-dom"
import { Element } from "./router/routes"

const App = () => {
  return (
    <div>
      <RouterProvider router={Element}/>
    </div>
  )
}

export default App