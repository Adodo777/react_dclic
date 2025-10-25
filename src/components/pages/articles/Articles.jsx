import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ArticlesList({ article }) {
    return (
        <div className="flex bg-black text-white rounded-xl flex-col items-center justify-between p-6">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-white mb-4 line-clamp-2 overflow-hidden" dangerouslySetInnerHTML={{ __html: article.title }}></h1>
                <img src={article.urlToImage} alt="Cover" className="w-full mb-6 rounded-xl hover:scale-105 transition duration-150" />
                <p className="text-gray-300 mb-6 line-clamp-3 overflow-hidden" dangerouslySetInnerHTML={{ __html: article.description }}></p>
            </div>
            <div className="flex w-full justify-between items-center">
                <span className="text-gray-500">{new Date(article.publishedAt).toLocaleString()}</span>
                <Link
                    to={`/articles/${article.publishedAt}`}
                    className="bg-white text-black px-5 py-2 rounded-xl hover:bg-gray-200 transition"
                >
                    Lire plus
                </Link>
            </div>
        </div>
    );
}

function Articles() {
    const [articles, setArticles] = useState([]);

    async function getArticles() {
        try {
            const url = "https://newsapi.org/v2/everything?q=tesla&from=2025-04-22&sortBy=publishedAt&apiKey=7956671204904e4886f4de523f3a1735"
            const response = await axios.get(url);
            const articlesData = response.data.articles;
            const articles = articlesData.filter(article => {
                const requiredKeys = ['author', 'title', 'description', 'content', 'url', 'urlToImage', 'publishedAt', 'source'];
                return requiredKeys.every(key => article[key] !== null && article[key] !== undefined && article[key] !== "");
              });
              console.log(articles);
            setArticles(articles)
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    }

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <div className="min-h-screen max-w-4xl mx-auto px-10">
            <div className="bg-black text-white flex flex-row gap-5 justify-center items-center px-5 py-5 -m-5 rounded-xl">
                <h1 className="text-3xl font-bold underline">Articles :</h1>
                <p className="text-gray-100 text-xl">Retrouvez ici les derniers articles du monde.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 pt-5 mt-6">
                {articles.map((article) => (
                    <ArticlesList key={article.publishedAt} article={article} />
                ))}
            </div>
        </div>
    );
}

export default Articles;
