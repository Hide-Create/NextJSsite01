import Link from "next/link";
import Image from "next/legacy/image"
import * as styles from "../styles/common.module.scss"

const Header = () => {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.container}>
                <div className={styles.flexContainer}>
                    <Link href="/" >
                        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
                    </Link>
                    <ul>
                        <li><Link href="/blog" >Blog</Link></li>
                        <li><Link href="/contact" >Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;