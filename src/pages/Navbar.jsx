import { NavLink } from "react-router-dom"
import './Navbar.css'

const NavbarTodo = () => {
    return (
        <>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"></input>
            <label for="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                </ul>
            </div>
            <div id='center' className="main center">
            </div>
        </>
    )
}

const NavbarAbout = () => {
    return (
        <>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"></input>
            <label for="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About App</NavLink></li>
                    <li><NavLink to="/About/Author">About Author</NavLink></li>
                </ul>
            </div>
            <div id='center' className="main center">
            </div>
        </>
    )
}

export { NavbarTodo, NavbarAbout }