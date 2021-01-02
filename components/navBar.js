import Link from 'next/link'
import navBarStyles from '../styles/navBar.module.css'

export default function NavBar() {
    return (
        <div className={navBarStyles.navBar}>
            <Link href={encodeURI('/')}>
                <a className={navBarStyles.navLink}>Home</a>
            </Link>
            <Link href={encodeURI('/일기')}>
                <a className={navBarStyles.navLink}>일기</a>
            </Link>
            <Link href={encodeURI('/food')}>
                <a className={navBarStyles.navLink}>Food</a>
            </Link>
        </div>
    )
}