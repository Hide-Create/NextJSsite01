import Link from "next/link";
import * as styles from "../styles/blog.module.scss"

const Pagination =({numberPages})=>{
    return(
        <h2 className={styles.paginationWrapper} >
            {Array.from({length:numberPages},(_,i)=>(
                <Link legacyBehavior key={i+1} href={ i === 0 ? `/blog/` : `/blog/page/${i+1}`} >
                    <a>{i + 1}</a>
                </Link>
            ))}
        </h2>
    )
}

export default Pagination