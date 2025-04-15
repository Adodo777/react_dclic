function Home() {

    return (
            <div className="max-w-4xl mx-auto text-center px-10">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">Bienvenue sur Mon Mini Blog</h1>
                <p className="text-gray-700 text-lg mb-6">
                    Ici, je partage des astuces, tutos et réflexions sur React, le design, et le code moderne.
                </p>
                <div className="grid gap-6">
                    <div className="bg-white shadow p-5 rounded-xl text-left">
                        <h2 className="text-xl font-semibold text-gray-800">🔹 Comment commencer avec React</h2>
                        <p className="text-gray-600 mt-2">
                            Une intro rapide pour comprendre les bases et se lancer sereinement dans le monde de React...
                        </p>
                    </div>

                    <div className="bg-white shadow p-5 rounded-xl text-left">
                        <h2 className="text-xl font-semibold text-gray-800">🔹 Utiliser Tailwind CSS dans un projet React</h2>
                        <p className="text-gray-600 mt-2">
                            Tailwind permet de coder des interfaces modernes sans quitter ton HTML. Voici comment l’intégrer et l’utiliser...
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Home
