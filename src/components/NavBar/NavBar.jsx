import { NavLink } from "react-router-dom";

const NavBar = () => {
    const links = <>
        <li className="mr-4"><NavLink to='/'>Home</NavLink></li>
        <li className="mr-4"><NavLink to='/bookslist'>Listed Books</NavLink></li>
        <li><NavLink to='/chart'>Pages to Read</NavLink></li>
        
    </>
    return (
        <div className="navbar bg-base-100 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2         rounded-box w-52">
                       {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#23BE0A] text-white font-semibold">Sign In</a>
                <a className="btn ml-4 bg-[#59C6D2] text-white font-semibold">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;