import cl from './Header.module.css'
import HeaderButton from './UI/HeaderButton/HeaderButton'
import HeaderInput from './UI/HeaderInput/HeaderInput'

export function Header ({logo}) {
    return (
        <div className={cl.header}>
            <div><img src={logo} alt='logo' /></div>
            <div className={cl.buttons}>
                <HeaderInput />
            </div>            
            <div className={cl.buttons}>   
                <HeaderButton>Contacts</HeaderButton>                
                <HeaderButton>About us</HeaderButton>                         
            </div>
        </div>
    )
}