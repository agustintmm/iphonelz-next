import Layout from "@/components/layout"
import Producto from "@/components/producto"
import styles from "@/styles/tienda.module.css"

function Tienda({productos}) {
    return (
        <Layout
            title="Tienda"
            description="Tienda virtual, venta de celulares, iphones, iPhoneLZ"
        >
            <main className="contenedor">
                <h1 className="heading">Nuestra Coleccion</h1>
                <div className={styles.contenedor}>
                    {productos.map(producto => (
                        <Producto
                            key={producto.id}
                            producto={producto}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

export default Tienda



export async function getServerSideProps(){
    const respuesta = await fetch(`${process.env.API_URL}/productos/?format=json`)
    const resultado = await respuesta.json()
    return {
        props:{
            productos:resultado
        }
    }
}