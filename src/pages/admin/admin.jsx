import Header from "../../components/Header"
import ADMGym from "../../images/ADMGym.jpg"
import NavbarADM from "../../components/NavbarADM"
import { Routes, Route } from "react-router-dom"
import "./admin.css"

const Admin = () => {
  return (
    <>
      <Header title='Dashboard' image={ADMGym} >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Dolor quidem saepe, dignissimos nobis et similique quae autem nam cumque modi.
      </Header>

      <Routes>
        <Route path="/" element={<NavbarADM />} />
      </Routes>


    </>
  )
}

export default Admin
