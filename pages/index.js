import Curso from '@/components/curso'
import Link from 'next/link'
import Layout from '@/components/layout'
import Producto from '@/components/producto'
import styles from '@/styles/index.module.css'

export default function Home({productos, cursos}) {
  console.log(productos)
  return (
    <>
      <Layout
        title={"Inicio"}
        description='Pagina principal de iPhoneLZ'
      >
      <main className={styles.contenedor}>
          <section id={styles.hero}>
            <div id={styles.contenido}>
              <h1 id={styles.headingHero}>Iphone LZ</h1>
              <p id={styles.parrafo}>Variedad de dispositivos Apple</p>
              <Link href="/tienda" id={styles.botonHero} className='boton'>¡Compra ahora!</Link>
            </div>
          </section>
          <section id={styles.featuredItems}>
            <h2>Articulos destacados</h2>
            <div id={styles.productos}>
            <Producto
                        key={productos[0].id}
                        producto={productos[0]}
            />
            <Producto
                        key={productos[1].id}
                        producto={productos[1]}
            />
            <Producto
                        key={productos[2].id}
                        producto={productos[2]}
            />
            </div>
          </section>
          <Curso
            cursos={cursos}
          />          
          <section id={styles.aboutUs}>
            <h2>Acerca de nosotros</h2>
            <p>En <strong>iPhone LZ</strong>, nuestro objetivo es claro: convertirnos en la mejor tienda de electrónica en el área de Lomas de Zamora. Creemos que más simple es mejor. Es por eso que hemos hecho que sea lo más fácil posible para usted encontrar lo que está buscando. Brindamos una selección de productos incomparable, una experiencia de compra única y un servicio al cliente extraordinario. Nuestras garantías integrales, opciones de entrega personalizadas y soporte profesional aseguran la satisfacción total de nuestros clientes incluso después de completar su pedido. Póngase en contacto y visítenos hoy.</p>
          </section>
      </main>
      </Layout>
    </>
  )
}



export async function getStaticProps(){
  const urlProductos = `${process.env.API_URL}/productos/?format=json`
  const urlCursos = `${process.env.API_URL}/cursos/?format=json`

  const [ resProductos, resCursos] = await Promise.all([
    fetch(urlProductos),
    fetch(urlCursos)
  ])

  const [ productos, cursos ] = await Promise.all([
    resProductos.json(),
    resCursos.json()
  ])

  return {
    props:
    {
      productos, 
      cursos
    }
}
}


// export async function getStaticProps(){
//   const urlProductos = `${process.env.API_URL}/productos/?format=json`
//   const urlPost = `${process.env.API_URL}/posts/?format=json`

//   const [ resProductos, resPosts] = await Promise.all([
//     fetch(urlProductos),
//     fetch(urlPost)
//   ])

//   const [ productos, posts ] = await Promise.all([
//     resProductos.json(),
//     resPosts.json()
//   ])

//   return {
//     props:
//     {
//       productos, 
//       posts
//     }
// }
// }
