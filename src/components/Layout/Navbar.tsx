import styles from "../../styles/Home.module.scss"
import Link from 'next/link'

interface PrivProps{
    active: string;
}
const Navbar = ({active}: PrivProps) => {
    return (
        <nav>
            <Link className={`link ${active === 'Home' ? 'active' : ''}`} href="/">
                <a>Home</a>
            </Link>
            <Link className={`link ${active === 'About' ? 'active' : ''}`}  href="about">
                <a>About</a>
            </Link>
            <Link className={`link ${active === 'Resume' ? 'active' : ''}`}  href="resume">
                <a>Resume</a>
            </Link>
        </nav>
    )
}
export default Navbar;