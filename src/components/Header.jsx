import cl from './Header.module.css'
import HeaderButton from './UI/HeaderButton/HeaderButton'
import HeaderInput from './UI/HeaderInput/HeaderInput'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

export function Header ({search = false}) {
    return (
        <div className={cl.header}>
            <div><Link to='/'><img src={logo} alt='logo' /></Link></div>
            {search && <div className={cl.buttons}>
                <HeaderInput />
            </div>}                      
            <div className={cl.buttons}>   
                <HeaderButton>Contacts</HeaderButton>                
                <HeaderButton>About us</HeaderButton>                         
            </div>
        </div>
    )
}