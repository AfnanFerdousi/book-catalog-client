import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center mx-auto">
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;