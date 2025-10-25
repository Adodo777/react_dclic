function Home() {


    const hundleClick = () => {

    }

    return (
        <div className="min-h-screen max-w-4xl mx-auto text-center px-10">
            <h1 className="text-4xl bg-black text-center p-6 rounded-xl font-bold text-white mb-4">Accueil</h1>
            <button onClick={hundleClick} className="bg-white text-black px-5 py-2 rounded-xl hover:bg-gray-200 transition">
                redirection
            </button>
        </div>
    );
}

export default Home;

