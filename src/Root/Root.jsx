
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
                <section className='lg:w-10/12 md:w-11/12 mx-auto'>
                    <Outlet></Outlet>
                </section>
            <section className='lg:w-10/12 md:w-11/12 mx-auto lg:my-8 md:mt-4'>
                <Footer></Footer>
            </section>
             <ToastContainer />
        </div>
    );
};

export default Root;