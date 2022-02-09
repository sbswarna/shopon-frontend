import { Link } from "react-router-dom";
import getCurrentUser from "../../service/authService.js";

const Navbar = (props) => {
    return (
        <>
            <nav
                className="d-flex flex-wrap justify-content-between px-4 navbar navbar-light"
                style={{ backgroundColor: "#e3f2fd" }}
            >
                <div className="d-flex flex-wrap justify-content-start px-4">
                    <Link className="navbar-brand" to="/">
                        Dashboard
                    </Link>

                    <Link className="navbar-brand" to="/platform">
                        Platform
                    </Link>
                </div>

                {!getCurrentUser() && (
                    <Link className="navbar-brand" to="/login">
                        Login
                    </Link>
                )}

                {getCurrentUser() && (
                    <div className="d-flex flex-wrap justify-content-end mt-3">
                        <div>
                            <p className="navbar-brand">
                                {getCurrentUser().username}
                            </p>
                        </div>

                        <Link className="navbar-brand" to="/logout">
                            Log Out
                        </Link>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
