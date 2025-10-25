import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Protypes from "prop-types";

// Définition des types pour l'article





// Valeurs par défaut (optionnel pour ce composant)




function ArticleDetailsPage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const url = "https://newsapi.org/v2/everything?q=tesla&from=2025-04-22&sortBy=publishedAt&apiKey=7956671204904e4886f4de523f3a1735";
        const response = await axios.get(url);
        const articlesData = response.data.articles;
        const article = articlesData.find((article) => article.publishedAt === id);
        setArticle(article);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div className="min-h-screen max-w-4xl mx-auto flex justify-center gap-8 shadow-2xl rounded-xl">Loading...</div>;
  }

  return (
    <div className="min-h-screen max-w-4xl mx-auto flex flex-row gap-8 shadow-2xl rounded-xl">
            <div className="min-h-screen bg-black text-white flex justify-center px-5 pt-5 -m-5 rounded-l-xl">
                <h1 className="text-3xl font-bold underline">Détails</h1>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-between p-6">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-black mb-4 " dangerouslySetInnerHTML={{ __html: article.title }}></h1>
                    <img src={article.urlToImage} alt="Cover" className="w-full mb-6 rounded-xl hover:scale-105 transition duration-150" />
                    <p className="text-gray-700 mb-6 bg-gray-200 rounded-xl p-2" dangerouslySetInnerHTML={{ __html: article.description }}></p>
                    <p className="text-gray-600 mb-6 " dangerouslySetInnerHTML={{ __html: article.content }}></p>
                </div>
                <div className="flex w-full justify-between items-center">
                    <span className="text-gray-600">{new Date(article.publishedAt).toLocaleString()} - {article.source.name} by {article.author}</span>
                    <Link
            to={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-2 rounded-xl hover:bg-black transition">
            
                        Go to source
                    </Link>
                </div>
            </div>
        </div>);

}

export default ArticleDetailsPage;ArticleDetailsPage.propTypes = {};ArticleDetailsPage.defaultProps = {};