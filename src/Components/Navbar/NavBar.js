import cart from './Assets/LogoCanarino.png'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav classNameName="navBar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/'>
                        <img className="Logo" src={cart} alt="LogoCanarino" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="Categories navbar-nav">
                            <li className="nav-item">
                            <NavLink to={'/category/Remeras'}  className={({isActive}) => isActive? 'ActiveOptions': 'Options'}>Remeras</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={'/category/Camperas'} className={({isActive}) => isActive? 'ActiveOptions': 'Options'}>Camperas</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={'/category/Pantalones'} className={({isActive}) => isActive? 'ActiveOptions': 'Options'}>Pantalones</NavLink>
                            </li>
                            <li className='CartWidget'>
                            <CartWidget/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
           
        </nav>
    )
}

export default NavBar