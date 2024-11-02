import { Link } from "react-router-dom";
import { useTheme } from '../common/ThemeContext';

function NavLink({ to, label, onClick }) {
    const { theme } = useTheme();

    return (
        <Link 
            to={to} 
            onClick={onClick} 
            style={{ color: theme === 'light' ? 'black' : 'white' }}
        >
            {label}
        </Link>
    );
}

export default NavLink;
