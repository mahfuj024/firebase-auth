import { Link, NavLink } from "react-router";
import { TiShoppingCart } from "react-icons/ti";
import { use } from "react";
import { Authcontext } from "../firebaseAuth/Authcontext";



const Navbar = () => {

    const { productCart } = use(Authcontext)
    console.log(productCart);
    const handlecartItem = () => {
        document.getElementById('my_modal_5').showModal()
    }

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
                        <NavLink className={({ isActive }) => isActive ? "text-blue-500 " : ""} to="/products">Products</NavLink>
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
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500 " : ""} to="/products">Products</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500 " : ""} to="/postes">Posts</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500 " : ""} to="/about">About</NavLink>
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <button onClick={handlecartItem} className="btn border-0 bg-base-100"><TiShoppingCart size={25} /><span className="mb-4 text-sm font-normal">{productCart.length}</span></button>
                {/* cart modal */}
                <dialog id="my_modal_5" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">

                        {
                            productCart.map(product =>

                                <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">

                                    <ul className="flex flex-col divide-y dark:divide-gray-300">
                                        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                            <div className="flex w-full space-x-2 sm:space-x-4">
                                                <img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={product.image} alt="Polaroid camera" />
                                                <div className="flex flex-col justify-between w-full pb-4">
                                                    <div className="flex justify-between w-full pb-2 space-x-2">
                                                        <div className="space-y-1">
                                                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.title}</h3>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-lg font-semibold">Price : {product.price}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end text-sm divide-x">
                                                        <button type="button" className="flex cursor-pointer items-center px-2 py-1 pl-0 space-x-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                                <rect width="32" height="200" x="168" y="216"></rect>
                                                                <rect width="32" height="200" x="240" y="216"></rect>
                                                                <rect width="32" height="200" x="312" y="216"></rect>
                                                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                                            </svg>
                                                            <span>Remove</span>
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <hr className="opacity-20" />
                                    </ul>


                                </div>





                            )
                        }
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                <NavLink to="/login" className={({ isActive }) => isActive ? "btn btn-primary" : "btn"}>Login</NavLink>
                <NavLink to="/signup" className={({ isActive }) => isActive ? "btn btn-primary" : "btn"}>Signup</NavLink>
            </div>
        </div>
    );
};

export default Navbar;