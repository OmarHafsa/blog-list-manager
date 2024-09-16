import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>hafsa</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create">New blog</Link>
                <Link to="/" style={{color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:"8px"
                }}>contact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;