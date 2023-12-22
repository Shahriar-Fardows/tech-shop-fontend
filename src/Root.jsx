import { Outlet } from 'react-router-dom';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';

const Root = () => {
    return (
        <div >
            <Header />
           <div className=' min-h-screen z-10'>
           <Outlet />
           </div>
            <div className='z-50'>
            <Footer  />
            </div>
        </div>
    );
};

export default Root;