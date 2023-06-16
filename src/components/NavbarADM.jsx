import { useContext } from "react"
import { MdOutlineContentPasteGo } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { DbContext } from "../contexts/db"
// import { db } from "../services/firebase"
// import { doc, setDoc, collection, getDocs } from "firebase/firestore"

const NavbarADM = () => {
  const { nameDocs } = useContext(DbContext)

  return (
    <>
      <div className="nav__container-adm">
        <div className="nav__header-adm" >
          <MdOutlineContentPasteGo />
          <h3>Content Manager</h3>
        </div>
        <div className="divider"></div>
        <div className="nav__menu-adm">
          <ul>
            {nameDocs.map((nameLi) => {
              return (
                <li key={nameLi}>
                  <NavLink to={nameLi}>{nameLi}</NavLink>
                </li>
              )
            })}

          </ul>
        </div>
        <button className="btn lg" >Create new entry</button>
      </div>
    </>
  )
}

// const handleSetDoc = async () => {
//   await setDoc(doc(db, "Testimonials", "04"), {})
//   console.log('Cadastrou')
// }


export default NavbarADM
