import { NavLink } from 'react-router-dom'
import { useContext } from 'react'

import AuthContext from './AuthContext'

const Navbar = () => {
    const { user } = useContext(AuthContext)
    return (
        <nav className="navbar">
            <div className="navbar__group">
                <NavLink
                    to="/"
                    className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
                >
                    Profile {user.name}
                </NavLink>
            </div>

            <NavLink
                to="/login"
                className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
            >
                {user.isAuthenticated ? 'Logout' : 'Login'}
            </NavLink>
        </nav>
    )
}

export default Navbar
