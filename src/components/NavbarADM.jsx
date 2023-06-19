import { useContext } from "react"
import { MdOutlineContentPasteGo } from "react-icons/md"
import { Link, NavLink } from "react-router-dom"
import { DbContext } from "../contexts/db"

const NavbarADM = () => {
  const { nameDocs } = useContext(DbContext)
  console.log('Dentro do NAV', nameDocs)
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
            {nameDocs.map((nameLi, index) => {
              return (
                <li key={index}>
                  <NavLink to={nameLi}>{nameLi}</NavLink>
                </li>
              )
            })}

          </ul>
        </div>
        <Link to='/admin/form' className="btn lg" >Create new section</Link>
      </div>
    </>
  )
}

export default NavbarADM
