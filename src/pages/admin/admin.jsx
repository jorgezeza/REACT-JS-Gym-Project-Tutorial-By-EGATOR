import Header from "../../components/Header"
import ADMGym from "../../images/ADMGym.jpg"
import NavbarADM from "../../components/NavbarADM"
import ContentADM from "../../components/ContentADM"
import { Routes, Route } from "react-router-dom"
import "./admin.css"

const Admin = () => {
  return (
    <>
      <Header title='Dashboard' image={ADMGym} >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Dolor quidem saepe, dignissimos nobis et similique quae autem nam cumque modi.
      </Header>
      <div className="container__adm" >
        <Routes>
          <Route path="/" element={<NavbarADM />} />
        </Routes>

        <ContentADM />
      </div>
    </>
  )
}

export default Admin
