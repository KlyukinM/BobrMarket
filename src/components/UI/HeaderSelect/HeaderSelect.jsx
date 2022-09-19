import cl from './HeaderSelect.module.css'

export default function HeaderSelect ({options, defaultValue, value, onChange}) {
    return (
        <select
            className={cl.select} 
            value={value}
            onChange={e => onChange(e.target.value)}
        >
          <option disabled value=''>{defaultValue}</option>
          {options.map(option =>
            <option key={option.value} value={option.value}>
                {option.name}
            </option>            
            )}          
        </select>
    )
}