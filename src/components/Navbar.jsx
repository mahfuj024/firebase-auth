import { Link, NavLink } from "react-router";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 lg:px-40 md:px-12 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm space-y-2 text-base font-semibold dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink className={({ isActive }) => isActive ? "text-blue-500 " : ""} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-500 " : ""} to="/users">Users</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-500 " : ""} to="/countrise">Countrise</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-500 " : ""} to="/postes">Posts</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-500 " : ""} to="/about">About</NavLink>
                    </ul>
                </div>
                <Link to="/" className="text-2xl font-bold text-blue-500">Pharetra</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu space-x-10 text-base menu-horizontal px-1 font-semibold">
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500 " : ""} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500 " : ""} to="/users">Users</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500 " : ""} to="/countrise">Countrise</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500 " : ""} to="/postes">Posts</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500 " : ""} to="/about">About</NavLink>
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <button className="btn">Login</button>
                <button className="btn">Signup</button>
            </div>
        </div>
    );
};

export default Navbar;