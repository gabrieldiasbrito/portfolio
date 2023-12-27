import { useState } from 'react'
import { IoMenu, IoClose  } from "react-icons/io5";
import './navbar.css'

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <nav className='navbar'>
            <h3>Gabriel.dev</h3>
            <ul className={`${isOpen && "open"}`}>
                <IoClose className="icon close" onClick={() => setIsOpen(!isOpen)}/>
                <div>
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre mim</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Contato</a></li>
                </div>
            </ul>
            <IoMenu className="icon" onClick={() => setIsOpen(!isOpen)}/>
        </nav>
    )
}