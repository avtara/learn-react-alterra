import { NavLink } from "react-router-dom";

const NotFound = ()=> {
    return (
        <div>
            <h1>Page Not found</h1>
            <NavLink to="/">Go Home</NavLink>
        </div>
    )
} 

export default NotFound;