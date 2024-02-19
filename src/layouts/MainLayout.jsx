import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
        
        <div>
            Navbar
        </div>
        <div>
            <Outlet/>
        </div>
        <div>
            Footer
        </div>
        </>
    );
};

export default MainLayout;