
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

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
        </div>
    );
};

export default Root;