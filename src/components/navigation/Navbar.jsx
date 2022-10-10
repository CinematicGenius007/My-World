const Navbar = () => {
    return (
        <nav className="flex justify-between items-center sticky py-3 px-6 w-full bg-neutral-100">
            <a href="/" className="logo text-3xl font-black">nebula</a>
            <div className="hidden md:flex justify-center items-center space-x-6 h-full text-xl">
                <a href="/" className="nav-link hover:bg-g-green">About</a>
                <a href="/" className="nav-link hover:bg-g-blue">Contact</a>
                <a href="/" className="nav-link hover:bg-g-red">Sign Up</a>
            </div>
        </nav>
    );
}

export default Navbar;