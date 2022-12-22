import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu = <>
        <li><Link>Navbar Item 1</Link></li>
        <li><Link>Navbar Item 2</Link></li>
    </>
    return (
        <div className="drawer">
            <input id="navbar-menu-portfolio" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="navbar-menu-portfolio" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">Navbar Title</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {menu}
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                Content
            </div>
            <div className="drawer-side">
                <label htmlFor="navbar-menu-portfolio" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;