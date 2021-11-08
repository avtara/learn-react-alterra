import { NavLink } from "react-router-dom"
import './Navbar.css'

const NavbarTodo = () => {
    return (
        <>
            <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"></input>
            <label for="openSidebarMenu" class="sidebarIconToggle">
                <div class="spinner diagonal part-1"></div>
                <div class="spinner horizontal"></div>
                <div class="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
                <ul class="sidebarMenuInner">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                </ul>
            </div>
            <div id='center' class="main center">
            </div>
        </>
    )
}

const NavbarAbout = () => {
    return (
        <>
            <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"></input>
            <label for="openSidebarMenu" class="sidebarIconToggle">
                <div class="spinner diagonal part-1"></div>
                <div class="spinner horizontal"></div>
                <div class="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
                <ul class="sidebarMenuInner">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About App</NavLink></li>
                    <li><NavLink to="/About/Author">About Author</NavLink></li>
                </ul>
            </div>
            <div id='center' class="main center">
            </div>
        </>
    )
}

export { NavbarTodo, NavbarAbout }