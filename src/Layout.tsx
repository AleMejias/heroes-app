import { Outlet } from "react-router-dom";
import { Navbar } from "./ui";

export const Layout = () => {

    return(

        <>
            <Navbar />

            <section className="container mt-2">

                <Outlet />

            </section>
        </>
    );
}