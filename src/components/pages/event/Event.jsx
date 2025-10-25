import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ArticlesList({ article }) {
    return (
        <div className="flex flex-col items-center justify-center p-6">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-black mb-4 line-clamp-2 overflow-hidden" dangerouslySetInnerHTML={{ __html: article.title }}></h1>
                <img src={article.urlToImage} alt="Cover" className="w-full mb-6 rounded-xl hover:scale-105 transition duration-150" />
                <p className="text-gray-600 mb-6 line-clamp-4 overflow-hidden" dangerouslySetInnerHTML={{ __html: article.description }}></p>
            </div>
            <div className="flex w-full justify-between items-center">
                <span className="text-gray-600">{new Date(article.publishedAt).toLocaleString()} - {article.source.name} by {article.author}</span>
                <Link
                    to={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-5 py-2 rounded-xl hover:bg-black transition"
                >
                    Read more
                </Link>
            </div>
        </div>
    );
}


function Event() {
    const [articles, setArticles] = useState([]);

    async function getArticles() {
        try {
            const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2025-03-16&sortBy=publishedAt&apiKey=3e42ec4a65ff4af08b484ee2d887a1e4");
            const articlesData = response.data.articles;
            setArticles(articlesData)
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    }

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <div className="min-h-screen max-w-4xl mx-auto flex flex-row gap-8 shadow-2xl rounded-xl">
            <div className="min-h-screen bg-black text-white flex justify-center px-5 pt-5 -m-5 rounded-l-xl">
                <h1 className="text-3xl font-bold underline">Articles</h1>
            </div>
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 px-5 pt-5">
                {articles.map((article, index) => (
                    <Link
                        key={index}
                        to={`/articles/${article.id}`}
                        className="bg-black text-white px-5 py-2 rounded-xl hover:bg-black transition"
                    >
                        <ArticlesList article={article} />
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default Event;
