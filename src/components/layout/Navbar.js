import { Link, useLocation } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
    const location = useLocation();
    return (
        <nav className="navbar shadow-lg bg-neutral mb-10">
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <FaGithub className="text-3xl pr-2 inline" />
                    <Link className="text-lg font-bold" to='/'>
                        {title}
                    </Link>
                </div>
                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link to='/' className={`${location.pathname === '/' ? 'btn-active' : ''} btn btn-ghost btn-sm mx-1 rounded-btn`}>
                            Home
                        </Link>
                        <Link to='/about' className={`${location.pathname === '/about' ? 'btn-active' : ''} btn btn-ghost btn-sm mx-1 rounded-btn`}>
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder'
};

Navbar.propTypes = {
    title: PropTypes.string
};

export default Navbar;