import { Link } from "react-router-dom";

function NotFound() {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Oups ! Page introuvable</h2>
            <p className="text-gray-600 mb-6">
                La page que tu cherches n'existe pas ou a été déplacée.
            </p>
            <Link
                to="/"
                className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
            >
                ⬅ Retour à l’accueil
            </Link>
        </div>
    );
}


export default NotFound