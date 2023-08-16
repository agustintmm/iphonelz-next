import { useEffect, useState } from "react"
import Layout from "@/components/layout"
import styles from '@/styles/carrito.module.css'

function Carrito({carrito, actualizarCantidad, eliminarProducto}) {
    const [ total, setTotal] = useState(0)
    
    useEffect(() => {
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.price), 0)
        setTotal(calculoTotal)
    }, [carrito])

    return (
        <Layout
            title="Carrito de compras"
            description="carrito de compras, compras tecnologicas, venta de celulares"
        >
            <main id={styles.carrito}>
                <h1 className='heading'>Carrito de compras</h1>
                <div id={styles.contenido}>
                    <div id={styles.productos}>
                        <h2>Productos</h2>
                        {carrito?.length === 0 ? 'Carrito vacio' : (
                            carrito?.map( producto => (
                            <div key={producto.id} className={styles.producto}>
                                <div className={styles.contenedorImagen}><img src={producto.image} alt={`Imagen del producto ${producto.name}`} /></div>
                                    <div className={styles.infoProducto}>
                                        <p><strong>{producto.name}</strong></p>
                                        <p>Cantidad:</p>
                                        <select
                                        className={styles.cantidad} 
                                        value={producto.cantidad}
                                        onChange={e => actualizarCantidad({
                                            cantidad: +e.target.value,
                                            id: producto.id
                                        })}
                                        >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        </select>
                                        <p>Precio: <span>${producto.price}</span></p>
                                        <p>Subtotal: <span>${producto.cantidad * producto.price}</span></p>
                                        <button 
                                            className={styles.botonEliminar}
                                            type='button'
                                            onClick={ () => eliminarProducto(producto.id) }
                                        >x</button>
                                    </div>
                            </div>
                    ))
                  )}

                    </div>
                    <div id={styles.totalCarrito}>
                        <h2>Resumen de compra</h2>
                        <p>Total a pagar: <strong>${total}</strong></p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Carrito