import { getPagesArray } from "../../../utils/pages"
import cl from './Pagination.module.css'

export default function Pagination ({totalPages, page, changePage}) {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className={cl.wrapper}>
        {page !== 1 && <span className={cl.page} onClick={() => changePage(page - 1)}>PREV</span>}
        {pagesArray.map(p =>
          <span
            onClick={() => changePage(p)} 
            key={p} 
            className={[page === p ? cl.page__current : cl.page]}            
          >
            {p}
          </span>
        )}    
         {page !== totalPages && <span className={cl.page} onClick={() => changePage(page + 1)}>NEXT</span>}
      </div>    
    )
}
