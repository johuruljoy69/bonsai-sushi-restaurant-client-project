import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto min-h-screen'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;