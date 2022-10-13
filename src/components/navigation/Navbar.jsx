import {Link} from "react-router-dom";

const Navbar = ({auth}) => {
    return (
        <nav className="flex justify-between items-center sticky py-3 px-6 w-full bg-neutral-100">
            <Link to="/" className="logo text-3xl font-black">nebula</Link>
            <div className="hidden md:flex justify-center items-center gap-4 h-full text-xl">
                <Link to="/about" className="nav-link hover:bg-g-green">About</Link>
                <Link to="/contact" className="nav-link hover:bg-g-blue">Contact</Link>
                {
                    auth.user
                        ?
                        (<Link to="/auth/settings" className="account-setting flex items-center justify-center hover:bg-g-red">
                            <span className="material-symbols-outlined font-light text-2xl leading-none">person</span>
                        </Link>)
                        :
                        (<Link to="/auth/login" className="nav-link hover:bg-g-red">Login</Link>)
                }
            </div>
        </nav>
    );
}

export default Navbar;