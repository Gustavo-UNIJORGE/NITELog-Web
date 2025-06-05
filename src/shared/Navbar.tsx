import { Link } from "react-router";
import routes from "@root/routes";
import "@styles/navbar.css"

const NavBar = () => {
    return (
        <div className="navbar">
            <Link 
                to={routes.HOME}
                className="nav-item">
                    Home
            </Link>
            <Link 
                to={routes.QRCODE}
                className="nav-item">
                    QRCode
            </Link>
        </div>
    )
}

export default NavBar;