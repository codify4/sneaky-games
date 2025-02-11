const EstereggPage = () => {
    return (
        <div className="flex min-h-screen flex-col py-8">
            <div className="container mx-auto"> 
                <h1 className="flex items-center justify-center text-6xl font-extrabold tracking-wider mb-6 text-center">
                    <span className="text-neon">🔥</span> <span>Secret Gaming Zone!</span> <span className="text-neon">🔥</span>
                </h1>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    <article className="flex flex-col space-y-3 p-6 bg-gray-800 rounded-xl shadow-lg">
                        <h2 className="text-4xl font-bold text-white">Popular Game Genres</h2>
                        <ul className="list-disc ml-6 mt-3 text-white">
                            <li>RPG (Role Playing Games)</li>
                            <li>FPS (First Person Shooter)</li>
                            <li>MOBA (Multiplayer Online Battle Arena)</li>
                            <li>Strategy Games</li>
                        </ul>
                    </article>

                    <article className="flex flex-col space-y-3 p-6 bg-neon rounded-xl shadow-lg">
                        <h2 className="text-4xl font-bold text-black">Top Gaming Platforms</h2>
                        <ol className="list-decimal ml-6 mt-3 text-black">
                            <li>PC Master Race</li>
                            <li>PlayStation 5</li>
                            <li>Xbox Series X</li>
                            <li>Nintendo Switch</li>
                        </ol>
                    </article>

                    <article className="flex flex-col space-y-3 p-6 bg-gray-800 rounded-xl shadow-lg">
                        <h2 className="text-4xl font-bold text-white">Gaming Fun Facts</h2>
                        <p className="mt-2 text-white">Did you know? The first video game was created in 1958!</p>
                    </article>
                </div>

                <div className="flex justify-center">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-neon rounded-xl shadow-lg">
                        <h3 className="text-3xl font-bold text-black">Classic Games Table</h3>
                        <div className="mt-3 overflow-x-auto">
                            <table className="w-full border-collapse border border-black">
                                <thead>
                                    <tr className="bg-gray-800">
                                        <th className="border border-black p-2 text-white">
                                            <h6>Game</h6>
                                        </th>
                                        <th className="border border-black p-2 text-white">
                                            <h6>Year</h6>
                                        </th>
                                        <th className="border border-black p-2 text-white">
                                            <h6>Platform</h6>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-black p-2 text-black">Pac-Man</td>
                                        <td className="border border-black p-2 text-black">1980</td>
                                        <td className="border border-black p-2 text-black">Arcade</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2 text-black">Super Mario Bros</td>
                                        <td className="border border-black p-2 text-black">1985</td>
                                        <td className="border border-black p-2 text-black">NES</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2 text-black">Tetris</td>
                                        <td className="border border-black p-2 text-black">1984</td>
                                        <td className="border border-black p-2 text-black">Various</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <div className="w-full p-6 bg-gray-800 rounded-lg shadow-lg">
                                <h4 className="text-2xl font-bold text-white">Easter Egg Hunt</h4>
                                <h5 className="flex flex-row mt-2 text-white">
                                    <span>You found our secret page! Here's a cookie</span> 
                                    <span className="animate-bounce text-5xl">🍪</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="mt-6 text-lg font-bold text-neutral-500 w-full">Go to the <a href="/games" className="underline">Games Page</a></h1>
            </div>
        </div>
    )
}

export default EstereggPage