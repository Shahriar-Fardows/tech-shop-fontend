import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Contexts } from '../../Context/Context';
import logo from '../../assets/Screenshot_2023-12-01_015410-removebg-preview.png'
import './Header.css'

const Header = () => {
  const { user, logOut } = useContext(Contexts);

  const link = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/shop'>shop</NavLink></li>
    {/* <li><NavLink to='/cart'>cart</NavLink></li> */}
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {link}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl text-cyan-500"><img src={logo} className="h-8" alt="Tach-Nex-logo" />Tach-Shop</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>
      <div className="navbar-end">
        
        {
          user ?
            <Link className=" p-2 "> <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
             
                <div className="w-10 rounded-full">
                  {
                    user.photoURL ? 
                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                    
                    :
                      <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  }

                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li> <Link>{user.displayName}</Link></li>
                <li><Link>{user.email}</Link></li>
                <li><Link to='/AddProduct'>Add Product</Link></li>
                <li><Link onClick={() => logOut()}>Logout</Link></li>
              </ul>
            </div> </Link>
            :
            <Link to='/Login' className=" p-2 "><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign up</button> </Link>
        }

      </div>
    </div>
  );
};

export default Header;