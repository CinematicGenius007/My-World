import {Outlet} from "react-router-dom";

const Auth = () => {
    return (
        <section className="flex-1 flex justify-center items-center w-full bg-gray-200 sm:bg-gray-300">
            <Outlet />
        </section>
    );
};

export default Auth;