import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data'
import { GoThreeBars } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'
import { AiOutlineCamera } from 'react-icons/ai'

import Logo from '../images/logo.png'
import './navbar.css'

import { AuthContext } from '../contexts/auth'

const Navbar = () => {
  const { setUser, userLogin, setUserLogin, logout } = useContext(AuthContext)
  const [isNavShowing, setIsNavShowing] = useState(false)

  const [openDialog, setOpenDialog] = useState(false)

  const handleLogout = () => {
    setUser({})
    setUserLogin(null)
    setOpenDialog(false)
    logout()
  }

  const makeLIS = (name, path, index) => {
    return (<li key={index}>
      <NavLink to={path} className={({ isActive }) => isActive ?
        'active-nav'
        :
        ''}
        onClick={() => setIsNavShowing(prev => !prev)}
      >
        {name}
      </NavLink>
    </li>)
  }

  return (
    <nav>
      <div className="container nav__container">
        <Link to='/' className='logo' onClick={() => setIsNavShowing(false)} >
          <img src={Logo} alt='Nav Logo' />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show_nav' : 'hide__nav'}`} >
          {links.map(({ name, path }, index) => {
            if (userLogin) {
              return name !== 'Login' && makeLIS(name, path, index)
            }
            return makeLIS(name, path, index)
          })}
        </ul>

        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
          }
        </button>

        {userLogin && <div className='account__container'>
          <button
            className="account-btn"
            onClick={() => setOpenDialog(!openDialog)}>
            {getFirstLetterOfName(userLogin.displayName)}
          </button>
          <div className='hide__account'>
            <h5>Egator Accout</h5>
            <p>{userLogin.displayName}</p>
            <p>{userLogin.email}</p>
          </div>

          <dialog className='dialog__wrapper' open={openDialog}>
            <div className='dialog__container'>
              <div className='dialog__container-header' >
                <div className='profile__image account-btn lg'>
                  {getFirstLetterOfName(userLogin.displayName)}
                  <div className='profile__icon' >
                    <AiOutlineCamera />
                  </div>
                </div>
                <div className='account__info' >
                  <p><b>{userLogin.displayName}</b></p>
                  <p>{userLogin.email}</p>
                </div>
              </div>

              <div className='dialog__container-btn'>
                <Link to='/admin' className='btn sm text__center' onClick={() => setOpenDialog(false)}>Manage Agator admin</Link>
                <button className='btn sm' onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </dialog>
        </div>
        }
      </div>
    </nav>
  )
}

const getFirstLetterOfName = name => name ? [...name][0] : name

export default Navbar
