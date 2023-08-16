import Link from "next/link"
import styles from '@/styles/index.module.css'

function Curso({cursos}) {
    const {title, content, image} = cursos[0]
    return (
        <section id={styles.cursos} className="cursos">  
            <style jsx="true">{`
                .cursos{
                    background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${image});
                    background-size: cover;
                    background-position: center;
                }
            `}</style>

            <div id={styles.contenidoCurso}>
                <h2>{title}</h2>
                <div className={styles.scrollContainer}>
                    <p id={styles.descripcionCurso}>{content}</p>
                </div>
                <Link target="blank" href="https://www.linkedin.com/in/agustín-martinez/" className="boton" id={styles.botonCurso}>Inscribite acá</Link>
            </div>
        </section>
    )
}

export default Curso