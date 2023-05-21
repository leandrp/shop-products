import { useContext } from 'react'
import { MyContext } from '../../context/MyContext'
import { Link } from 'react-router-dom'
import './styleNavBar.css'

export default function NavBar() {
  const { userMail, logout } = useContext(MyContext)

  return (
    <div className="container-main-header">
      <Link to={'/'}>
        <h1 className="container-main-title">Shop Products</h1>
      </Link>

      <div>
        <p className="container-main-user-mail">{userMail}</p>
        <button className="container-main-user-logout" onClick={logout}>
          Sair
        </button>
      </div>
    </div>
  )
}
