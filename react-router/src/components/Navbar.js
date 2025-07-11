import { Link } from "react-router-dom";
import '../styles/navbar.css'
export default function Navbar() {
    return (
        <ul className="navbar">
            <li>
                <Link to="/">Home
                </Link>
            </li>
            <li className="dropdown-title">
                Links
                <ul className="dropdown">
                    <li>
                        <Link to="/first">Link 1
                        </Link>
                    </li>
                    <li>
                        <Link to="/second">Link 2
                        </Link>
                    </li>
                    <li>
                        <Link to="/third">Link 3
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    )
}