import { formatearFecha } from '@/utils/helpers'
import React from 'react'
import Layout from '@/components/layout'
import styles from '@/styles/post.module.css'

function Post({post}) {
    const {title, content, image, created} = post
    return (
        <Layout
            title={title}
            description='post teconologico, informacion apple'
        >
            <main className='contendor'>
                <div className={styles.post}>
                    <h1 className='heading'>{title}</h1>
                    <p className={styles.content}>{content}</p>
                    <img className={styles.imagen} src={image} alt='Imagen del post'/>
                    <p>Publicado el: {formatearFecha(created)}</p>
                </div>
            </main>
        </Layout>
    )
}

export default Post

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/posts/?format=json`)
    const resultado = await respuesta.json()

    const paths = resultado.map(post => ({
        params: {
            id: `${post.id}`
        }
    }))
    return{
        paths,
        fallback: false
    }
}


export async function getStaticProps({params}){
    const respuesta = await fetch(`${process.env.API_URL}/posts/${params.id}/?format=json`)
    const resultado = await respuesta.json()
    return {
        props:{
            post: resultado
        }
    }
}   