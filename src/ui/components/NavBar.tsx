import { NavLink } from 'react-router-dom';


export const Navbar = () => {

    const setClassLinkActive = ( state = false ) => {

        const className = 'nav-item nav-link';
        return state ? `${className} active` : className;
    };


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({ isActive }) => setClassLinkActive(isActive)} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => setClassLinkActive(isActive)} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                        Alejandro
                    </span>

                    <button className='nav-item nav-link btn'>
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}
