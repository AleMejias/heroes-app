import { NavLink } from 'react-router-dom';


export const Navbar = () => {

    const setClassLinkActive = ( state = false , path: string) => {
        const className = 'nav-item nav-link';
        const currentPath = window.location.pathname;

        if( currentPath === '/' && path === '/marvel') {
            return `${className} active`;
        } else if( state ) {
            return `${className} active`;
        } else {
            return className;
        }
    };


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({ isActive }) => setClassLinkActive(isActive,"/marvel")} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => setClassLinkActive(isActive,"/dc")} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => setClassLinkActive(isActive,"/search")} 
                        to="/search"
                    >
                        Search
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
