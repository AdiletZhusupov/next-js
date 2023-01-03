import Head from "next/head"

export default function Blog({title, description}){
    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Head>
        <h1 className="content">
            <span>Article | </span>
            <span>Env Analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID}</span>
        </h1>
    </>
}


export async function getServerSideProps(){

    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;

    console.log(`Username: ${user} & Password: ${password}`)

    return{
        props: {
            title: "Article Title",
            description: "Article Description"
        }
    }
}