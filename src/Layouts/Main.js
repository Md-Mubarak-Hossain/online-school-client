import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BsSun, BsMoon } from 'react-icons/bs';
import './Main.css';

import logo from '../components/assets/logo.png';
import Footer from '../pages/shared/footer/Footer';

const Main = () => {
    const [them, setThem] = useState('night')
    const menu = <>
        <label className="swap swap-rotate">
            <input type="checkbox" />
            <BsSun onClick={() => setThem('light')} className="swap-on fill-current w-5 h-5"></BsSun>
            <BsMoon onClick={() => setThem('night')} className="swap-off fill-current w-5 h-5"></BsMoon>
        </label>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><a href='#course'>Courses</a></li>
        <li><Link to='/login'>Log in</Link></li>
        <li><Link to='/signup'>Sign up</Link></li>
        <li><Link to='/'>Log out</Link></li>
        <li><Link to='/'>Contact</Link></li>
    </>
    return (
        <div data-theme={them}>
            <div className="drawer">
                <input id="navbar-menu-portfolio" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar  shadow-lg">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="navbar-menu-portfolio" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 place-items-center p-2 mx-2">
                            <img src={logo} alt="" className='w-14 h-14 hidden lg:block' />
                            <h2 className='lg:font-extrabold lg:text-2xl underlined uppercase px-2'>online school</h2>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal place-items-center uppercase">
                                {menu}
                            </ul>
                        </div>
                    </div>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
                <div className="drawer-side">
                    <label htmlFor="navbar-menu-portfolio" className="drawer-overlay"></label>
                    <ul className="menu px-4 pt-10 w-80  bg-black text-white place-items-center uppercase">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;