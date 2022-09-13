import cl from './HeaderButton.module.css'

export default function HeaderButton ({children}) {
    return (
        <button className={cl.button}>{children}</button>
    )
}