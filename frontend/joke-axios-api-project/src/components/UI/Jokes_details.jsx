import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useJokes } from '../../context/JokesContext';

const Jokes_details = () => {
    const { jokeId } = useParams();
    const { jokes, IndivJoke } = useJokes();
    
    const navigate = useNavigate();
    
    useEffect(() => {
      IndivJoke(jokeId);      
    }, []);
    
    if(jokes.isLoading) return <p>Loading Jokes....</p>;
    if(jokes.error) return <p className='text-red-500 font-bold'>Error:- {jokes.error}</p>;
    const { id, title, punchline } = jokes.jokesStore[0];
    return (
      <ul className='flex flex-col w-full gap-5'>
              <li className='flex flex-col p-2 w-[20%] bg-gray-200 shadow shadow-blue-100' key={id}>
                <h1>{id}</h1>
                <h4>{title}</h4>
                <p>{punchline}</p>
              </li>
      <button type='button' className='bg-blue-500 p-1 rounded-md w-[max-content] h-[max-content]' onClick={() => navigate("/jokes")}>Back Jokes</button>
    </ul>
  )
}

export default Jokes_details
