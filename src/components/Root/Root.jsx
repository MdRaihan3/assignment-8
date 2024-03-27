import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div className="md:max-w-6xl mx-auto mt-5 mb-16">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;