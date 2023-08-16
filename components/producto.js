import Link from "next/link"
import stylesTienda from "@/styles/tienda.module.css"
import stylesIndex from '@/styles/index.module.css'
import { useRouter } from "next/router"

function Producto({producto}){
    const router = useRouter()
    const {name, description, price, image, id } = producto
    return (
        <div className={router.pathname === '/tienda' ? stylesTienda.producto : stylesIndex.producto}>
            <Link className={router.pathname === '/tienda' ? stylesTienda.enlaceProducto : stylesIndex.enlaceProducto} href={`/productos/${id}`}>
                <img className={router.pathname === '/tienda' ? stylesTienda.imagen : stylesIndex.imagen} src={image} alt="Imagen del dispositivo" />
            </Link>
            <div className={router.pathname === '/tienda' ? stylesTienda.infoProducto : stylesIndex.infoProducto}>
                <h3>{name}</h3>
                <p className={router.pathname === '/tienda' ? stylesTienda.descripcion : stylesIndex.descripcion}>{description}</p>
            </div>
            <p className={router.pathname === '/tienda' ? stylesTienda.precio : stylesIndex.precio}>${price}</p>
            <Link href={`/productos/${id}`} className={router.pathname === '/tienda' ? stylesTienda.boton : stylesIndex.boton}>Comprar</Link>
        </div>
    )
}

export default Producto