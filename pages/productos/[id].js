import Layout from "@/components/layout"
import styles from "@/styles/producto.module.css"
import { useState } from "react"

function Producto({producto, agregarCarrito, carrito}) {
    
    const [ cantidad, setCantidad ] = useState(0)
    const { name, description, image, price} = producto
    
    const handleSubmit = e => {
        e.preventDefault()
        if(cantidad < 1){
            alert("Cantidad no valida")
            return 
        }

        // Crear un objeto
        const productoSeleccionado = {
            id: producto.id,
            image, 
            name, 
            price,
            cantidad
        }

        // Pasando la información al context
        agregarCarrito(productoSeleccionado)
    }

    return (
        <Layout
            title={`${name}`}
        >
            <main className={styles.contenedor}>
                <div className={styles.producto}>
                    <div className={styles.infoProducto}>
                        <h2 className="heading">{name}</h2>
                        <img className={styles.imagen} src={image} alt="Imagen del dispositivo" />
                    </div>
                    <div className={styles.descripcionProducto}>
                        <p className={styles.descripcion}>{description}</p>
                        <p className={styles.price}>${price}</p>
                        <form 
                            onSubmit={handleSubmit}
                            className={styles.formulario}
                        >
                            <label htmlFor="cantidad">Cantidad</label>
                            <select 
                                id="cantidad"
                                onChange={ e => setCantidad(Number(e.target.value))}
                            >
                                <option value="0">Seleccionar</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <input
                                    className="boton"
                                    id={styles.boton}
                                    type="submit"
                                    value="Agregar al carrito"
                            />
                        </form>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Producto

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/productos/?format=json`)
    const resultado = await respuesta.json()

    const paths = resultado.map(producto => ({
        params: {
            id: `${producto.id}`
        }
    }))
    return{
        paths,
        fallback: false
    }
}


export async function getStaticProps({params}){
    const respuesta = await fetch(`${process.env.API_URL}/productos/${params.id}/?format=json`)
    const resultado = await respuesta.json()
    return {
        props:{
            producto: resultado
        }
    }
}   


