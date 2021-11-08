import React from 'react'
import { NavbarAbout } from './Navbar'

const AboutApp = () =>
{
    return (
        <div>
            <NavbarAbout/>
            <div className="container" style={{width: "800px", margin: "0 auto"}}>
                <p style={{textAlign: "center"}}>About App</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam maxime esse iste necessitatibus unde provident ut, consectetur eum? Expedita voluptatibus perferendis repudiandae a quo eius deserunt quam consequatur aperiam eaque!</p>
            </div>
        </div>
    )
}

const AboutAuthor = () =>
{
    return (
        <div>
            <NavbarAbout/>
            <div className="container" style={{width: "800px", margin: "0 auto"}}>
                <p style={{textAlign: "center"}}>About Author</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo nostrum voluptatibus distinctio deserunt inventore ullam, repellat eligendi atque dolor et libero eos debitis, sed omnis. Nesciunt officiis soluta sapiente.</p>
            </div>
        </div>
    )
}

export {AboutAuthor, AboutApp}