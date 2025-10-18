import { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8000");
      const data = await response.json();
      const id = Math.floor(Math.random() * data.length);
      setJoke(data[id]);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setError("Failed to fetch joke. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-extrabold text-white mb-3 drop-shadow-lg">
            😄 Joke Generator
          </h1>
          <p className="text-white text-lg opacity-90">
            Click the button for a random joke to brighten your day!
          </p>
        </div>

        {/* Joke Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6 min-h-[280px] flex flex-col justify-between transform transition-all duration-300 hover:scale-[1.02]">
          {loading ? (
            <div className="flex flex-col items-center justify-center flex-1">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mb-4"></div>
              <p className="text-gray-500 text-lg">Loading a funny joke...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center flex-1">
              <div className="text-6xl mb-4">😕</div>
              <p className="text-red-500 text-lg font-semibold">{error}</p>
            </div>
          ) : joke ? (
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-6">
                <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  #{joke.id}
                </div>
                <p className="text-gray-800 text-2xl font-semibold leading-relaxed mb-4">
                  {joke.setup}
                </p>
              </div>
              <div className="border-t-2 border-gray-200 pt-4">
                <p className="text-purple-600 text-xl font-medium italic">
                  {joke.punchline}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center flex-1">
              <div className="text-6xl mb-4">🎭</div>
              <p className="text-gray-500 text-lg">Click below to get started!</p>
            </div>
          )}
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            onClick={getJoke}
            disabled={loading}
            className="bg-white text-purple-600 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
                Loading...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                🎲 Get New Joke
              </span>
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white text-sm opacity-75">
            Made with ❤️ using React & Express
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;