import Layout from "@/components/layout"
import Link from "next/link"

function Pagina404 () {
    return (
        <Layout>
            <main className="contenedor">
                <h1 className='heading'>Ups, hubo un error</h1>
                <p className="heading">404 NOT FOUND</p>
                <Link className="boton" href="/">Ir al inicio</Link>
            </main>
        </Layout>
    )
}

export default Pagina404