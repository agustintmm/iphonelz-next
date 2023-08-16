import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"

function Header () {
    const router = useRouter()
    
    return (
        <header className={router.pathname === '/carrito' ? styles.header : `${styles.header} ${styles.fijo}`}>
            <div className={styles.contenedor}>
                <Image className={styles.logo} src="/img/logo.png" width={100} height={100} alt="imagen logotipo"/>

                <nav className="navegacion">
                    <Link href='/'><span className={router.pathname === "/" ? 'active' : ''}>Inicio</span></Link>
                    <Link href='/nosotros'><span className={router.pathname === "/nosotros" ? 'active' : ''}>Nosotros</span></Link>
                    <Link href='/blog'><span className={router.pathname === "/blog" ? 'active' : ''}>blog</span></Link>
                    <Link href='/tienda'><span className={router.pathname === "/tienda" ? 'active' : ''}>tienda</span></Link>
                    <Link href='/carrito'><Image alt="imagen del carrito de compras" src="/img/carrito.png" width={30} height={25}/></Link>
                </nav>
            </div>
        </header>
    )
}

export default Header