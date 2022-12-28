export default function ArticleListByCategory({articles, category}){
    return(
        <>
            <h1>News for category <i>{category}</i></h1>
            {articles.map(article=>{
                return (
                    <div key={article.id}>
                        <h2>{article.id} {article.title}</h2>
                        <p>{article.description}</p>
                        <hr/>
                    </div>
                )
            })}
        </>
    )
}

export async function getServerSideProps(context){
    const {params, req, res, query} = context;
    console.log(query)
    console.log(req.headers.cookie);
    res.setHeader('Set-Cookie', ['name=Adilet'])
    const {category} = params;
    const resp = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await resp.json()

    return {
        props: {
            articles: data,
            category,
        }
    }
}