import React from 'react'
import styles from "@/styles/blog.module.css"
import Link from 'next/link'
import { formatearFecha } from '@/utils/helpers'

function Post({post}) {
    const {title, image, created, id} = post
    return (
        <div className={styles.post}>
            <Link href={`/posts/${id}`} className={styles.contenedorImagen}><img src={image} alt='Imagen del post' className={styles.imagen}></img></Link>
            <div className={styles.informacionPost}>
                <h2 className={styles.titulo}>{title}</h2>
                <p className={styles.fecha}>{formatearFecha(created)}</p>
                <Link href={`/posts/${id}`} className='boton'>Ver Articulo</Link>
            </div>
        </div>
    )
}

export default Post