import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

function Layout({children, title = '', description = ''}) {
    return (
        <>  
            <Head>
                <title>{`iPhoneLZ - ${title}`}</title>
                <meta name="description" content={description}/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout