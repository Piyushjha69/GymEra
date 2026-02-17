import { Link } from "react-router-dom"

export default function Navbar(props: any) {
    const { isLoggedIn } = props
    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <div className='logo-container'>
                    <img src="/gymeraLogo.png" alt="GymEra Logo" className='logo' />
                    <a href="/"><h2 className='brand-name'>GymEra</h2></a>
                </div>

                {isLoggedIn ?
                    <div></div>
                    : (<ul className='nav-links'>
                        <li><a href="/login">Log in</a></li>
                        <li><a href="/register">Get Started</a></li>
                    </ul>)}
            </div>
        </nav>
    )
}

