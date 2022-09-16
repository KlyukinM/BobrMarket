import { useNavigate } from 'react-router-dom'
import cl from './AsideButton.module.css'

export default function AsideButton ({name, active}) {
    const navigate = useNavigate()
    return (
        <button 
            className={[active === true ? cl.active : cl.button]}
            onClick={() => navigate(`/${name}`, {replace: true})}
        >
            {name}
        </button>
    )    
}