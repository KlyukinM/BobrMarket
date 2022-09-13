import cl from './AsideButton.module.css'

export default function AsideButton ({name, active, categorySelect}) {
    return (
        <button 
            className={[active === true ? cl.active : cl.button]}
            onClick={() => categorySelect(name)}
        >
            {name}
        </button>
    )    
}