import cl from './BuyButton.module.css'

export default function BuyButton ({children}) {
    return (
        <button className={cl.button}>{children}</button>
    )
}