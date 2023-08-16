import Layout from "@/components/layout"
import Post from "@/components/post"
import styles from "@/styles/blog.module.css"

function Blog({posts}) {
    console.log(posts)
    return (
        <Layout
            title="Blog"
            description="Blog de tecnologia, venta de celulares, consejos, iphonelz"
        >
            <main className="contenedor">
                <h1 className="heading">Nuestro Blog</h1>
                <div className={styles.contenedor}>
                    {posts?.map( post => (
                        <Post
                            key={post.id}
                            post={post}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

export default Blog


export async function getStaticProps(){
    const respuesta = await fetch(`${process.env.API_URL}/posts/?format=json`)
    const resultado = await respuesta.json()
    return {
        props:{
            posts: resultado
        }
    }
} 