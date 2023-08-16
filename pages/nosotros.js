import React from 'react'
import Layout from '@/components/layout'
import Image from 'next/image'
import styles from "../styles/nosotros.module.css"



function Nosotros () {
    return (
        <Layout
            title={"Nosotros"}
            description='Información acerca de nosotros'
        >
        
            <main className='contenedor'>
                <h1 className='heading'>Nosotros</h1>
                <Image priority={true} src="/img/nosotros.jpeg" width={1000} height={1000} className={styles.imagen} alt='Imagen ilustrativa nosotros'/>
                <p className={styles.contenidoNosotros}>
                En iPhone LZ, nuestro objetivo es claro: convertirnos en la mejor tienda de electrónica en el área de Lomas de Zamora. Creemos que más simple es mejor. Es por eso que hemos hecho que sea lo más fácil posible para usted encontrar lo que está buscando. Brindamos una selección de productos incomparable, una experiencia de compra única y un servicio al cliente extraordinario. Nuestras garantías integrales, opciones de entrega personalizadas y soporte profesional aseguran la satisfacción total de nuestros clientes incluso después de completar su pedido. Póngase en contacto y visítenos hoy.
                </p>
            </main>
        </Layout>
    )
}

export default Nosotros