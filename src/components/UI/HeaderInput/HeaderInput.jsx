import cl from './HeaderInput.module.css'

export default function HeaderInput () {
    return (
        <input className={cl.input} type="text" placeholder="Type to search..." />
    )
}