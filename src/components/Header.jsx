import cl from './Header.module.css'
import HeaderButton from './UI/HeaderButton/HeaderButton'
import HeaderInput from './UI/HeaderInput/HeaderInput'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

export function Header () {
    return (
        <div className={cl.header}>
            <div>
                <Link to='/'>
                    <div className={cl.logo_wrapper}>
                        <div className={cl.logo}></div>
                        <div className={cl.logo_title}>Bobr<span>Market</span></div>
                    </div>                    
                </Link>
            </div>                            
            <div className={cl.buttons}>   
                <HeaderButton>Contacts</HeaderButton>
            </div>
        </div>
    )
}