import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center sticky py-3 px-6 w-full bg-neutral-100">
            <a href="/" className="logo text-3xl font-black">nebula</a>
            <div className="hidden md:flex justify-center items-center gap-4 h-full text-xl">
                <Link to="/about" className="nav-link hover:bg-g-green">About</Link>
                <Link to="/contact" className="nav-link hover:bg-g-blue">Contact</Link>
                <Link to="/auth/login" className="nav-link hover:bg-g-red">Login</Link>
                <button className="account-setting hover:bg-g-red">
                    <span className="material-symbols-outlined font-light">settings_account_box</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;