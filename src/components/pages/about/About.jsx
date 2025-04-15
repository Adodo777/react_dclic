function About() {

    return (

        <div className="min-h-screen max-w-3xl mx-auto text-center px-10">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">À propos de moi</h1>
            <p className="text-gray-700 text-lg mb-6">
                Salut 👋, je m'appelle <strong>Kintoho Kouessi Adodo Marcos</strong>, mais tu peux m'appeler Marcos.
                Je suis un passionné de <strong>design graphique</strong>, de <strong>développement web & mobile</strong>, et d’<strong>entrepreneuriat digital</strong>.
            </p>

            <div className="text-left bg-gray-50 p-6 rounded-xl shadow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Pourquoi ce blog ?</h2>
                <p className="text-gray-700 mb-4">
                    Ce blog est mon espace d’expression pour partager mes réflexions, découvertes et techniques autour du code, du design et de la création de projets. J’y parle de React, Tailwind CSS, e-commerce, mais aussi de la vie de freelance et d’entrepreneur en Afrique.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Ce que tu vas trouver ici :</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Des tutos simples et pratiques sur React, CSS et autres outils modernes</li>
                    <li>Des réflexions sur la productivité, les projets, l’inspiration</li>
                    <li>Des conseils concrets pour progresser dans le monde du digital</li>
                </ul>
            </div>

            <p className="mt-8 text-gray-600">
                Merci de lire 🙏. Si tu veux échanger, propose-moi un sujet ou laisse-moi un message via mail :<strong><em>marcos.kintoho@outlook.fr</em></strong>.
            </p>
        </div>

    )
}


export default About
