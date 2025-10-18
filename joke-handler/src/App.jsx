import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [joke, setJoke] = useState({});
  useEffect(()=>{
    getJoke();
  },[]);

  const getJoke = async()=>{
    try{
      const response=await axios.get("http://localhost:8000");
      let id=Math.floor(Math.random() * response.data.length);
      setJoke(response.data[id]);
     
    }
    catch(error){
      console.error("Error fetching joke:", error);
    }
  }
  return (
 <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
  <div className="w-full max-w-2xl">
    <div>
      <h1 className="text-4xl font-bold text-white mb-6 text-center">Joke Handler</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={getJoke}> get Joke</button>
      {/* Joke Display Area */ }
      {
        joke && (
           
          <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-6 mt-4">
            <p className="text-gray-800 text-lg">{joke.setup}</p>
            <p className="text-gray-800 text-lg">{joke.punchline}</p>
          </div>
        )
      }
      
      
    
        
    </div>
  </div>
 </div>

 
  )
}

export default App
