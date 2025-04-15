
function Articles() {


    return (
        <div className="min-h-screen max-w-4xl mx-auto  px-10">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">📘 Mini Blog</h1>

            <div className="flex flex-col gap-6 px-8">
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">🔹 Comment commencer avec React</h2>
                    <p className="text-gray-700 leading-relaxed">
                        React est une bibliothèque JavaScript pour construire des interfaces utilisateur...
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">🔹 Les hooks en React</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Les hooks comme useState ou useEffect permettent de gérer l’état et les effets dans les composants...
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">🔹 Tailwind CSS avec React</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Tailwind CSS est une solution utilitaire qui accélère le développement frontend avec des classes pré-définies...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Articles