export default function NewsArticleList({articles}){
    return (<>
        <h1>List of News Articles</h1>
        {articles.map(article => {
            return <div key={article.id}>{article.id} {article.title} | {article.category}</div>
        })}
    </>)
}

export async function getServerSideProps(){
    const resp = await fetch('http://localhost:4000/news')
    const data = await resp.json()

    return {
        props: {
            articles: data
        }
    }
}