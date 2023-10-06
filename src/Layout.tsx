import { Outlet } from "react-router-dom";
import { Navbar } from "./ui";

export const Layout = () => {

    return(

        <>
            <Navbar />

            <section className="container">

                <Outlet />

            </section>
        </>
    );
}