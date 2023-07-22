import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="mx-auto">
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;