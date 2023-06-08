import { MdOutlineContentPasteGo } from "react-icons/md"
import { NavLink } from "react-router-dom"
// import {programs} from "../data"

const NavbarADM = () => {
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
            <li>
              <NavLink>Programs</NavLink>
            </li>
            <li>
              <NavLink>Values</NavLink>
            </li>
            <li>
              <NavLink>FAQs</NavLink>
            </li>
            <li>
              <NavLink>Testimonials</NavLink>
            </li>
            <li>
              <NavLink>Gallery</NavLink>
            </li>
            <li>
              <NavLink>Plans</NavLink>
            </li>
            <li>
              <NavLink>Trainers</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavbarADM
