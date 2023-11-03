import { Outlet } from "react-router-dom"
import MainLayOut from "./Components/layOut/MainLayOut"


function App() {
 

  return (
    <>
        <MainLayOut>
          <Outlet></Outlet>
        </MainLayOut>
    </>
  )
}

export default App
