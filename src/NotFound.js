import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="NotFound">
            <h1>404: Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/">Home Page</Link>
        </div>
     );
}
 
export default NotFound;