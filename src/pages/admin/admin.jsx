import { useEffect, useState, useContext } from "react"
import Header from "../../components/Header"
import ADMGym from "../../images/ADMGym.jpg"
import NavbarADM from "../../components/NavbarADM"
import ContentADM from "../../components/ContentADM"
import Form from "../../components/Form"
import { Routes, Route, useLocation } from "react-router-dom"
import { DbContext } from "../../contexts/db"

import "./admin.css"

const Admin = () => {
  const { nameDocs } = useContext(DbContext)
  const [nameTitleAndPath, setNameTitleAndPath] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    nameDocs.forEach(nameDoc => {
      if (pathname === `/admin/${nameDoc}`) {
        setNameTitleAndPath(nameDoc)
      }
    })
  }, [pathname, nameDocs])

  return (
    <>
      <Header title='Dashboard' image={ADMGym} >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Dolor quidem saepe, dignissimos nobis et similique quae autem nam cumque modi.
      </Header>
      <div className="container__adm" >
        <NavbarADM />

        <Routes>
          <Route path='/' element={<ContentADM title={nameTitleAndPath} />} />
          <Route path={`/${nameTitleAndPath}`} element={<ContentADM title={nameTitleAndPath} />} />
          <Route path='/form' element={<Form title='Register Section' />} />
        </Routes>
      </div>
    </>
  )
}

export default Admin
