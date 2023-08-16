import Link from "next/link"
import styles from "../styles/footer.module.css"
import Image from "next/image"

function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.contenedor}>
                <nav className="navegacion">                        
                    <Link href='/'>Inicio</Link>
                    <Link href='/nosotros'>Nosotros</Link>
                    <Link href='/blog'>blog</Link>
                    <Link href='/tienda'>tienda</Link>
                </nav>
                <article className={styles.info}>
                    <p>iPhone LZ</p>
                    <p>Telefono: 11223414124</p>
                    <a className="link" href="mailto: agustinmartinez2003@gmail.com" target="blank"> Envianos un mail</a>
                    <p>Sitio creado por Agustin Martinez</p>
                </article>
                <article className="redes-footer">
                    <a href="https://www.linkedin.com/in/agustín-martinez/" target="blank"><Image className={styles.image} src="/img/logo-fb.png" width={40} height={40} alt="logo facebook" /></a>
                    <a href="https://www.linkedin.com/in/agustín-martinez/" target="blank"><Image className={styles.image} src="/img/logo-yt.png" width={40} height={40} alt="logo youtube" /></a>
                    <a href="https://www.linkedin.com/in/agustín-martinez/" target="blank"><Image className={styles.image} src="/img/logo-in.png" width={40} height={40} alt="logo linkedln" /></a>
                </article>
            </div>    
        </footer>
    )
}

export default Footer