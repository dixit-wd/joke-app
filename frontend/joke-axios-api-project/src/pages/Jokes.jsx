import React, {useEffect} from 'react';
import { useJokes } from '../context/JokesContext';
import { useNavigate } from 'react-router';
import Form from '../components/Form';

const Jokes = () => {
  const { jokes, GetJokes, setEdit, DeleteJoke } = useJokes();
  const navigate = useNavigate();

  useEffect(() => {
    GetJokes();
  }, []);
  

  if(jokes.isLoading) return <p>Loading Jokes...</p>
  if(jokes.error) return <p className='text-red-500 font-bold'>Error:- {jokes.error}</p>
  return (
    <>
    <Form />
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5'>
      {
        jokes.jokesStore?.map((currJoke) => {
          const {id, title, punchline} = currJoke;          
          return (
            <li className='flex flex-col p-2 bg-gray-200 shadow shadow-blue-100 cursor-pointer' onClick={() => navigate(`/jokes/${id}`)} key={id}>
                <h1>{id}</h1>
                <h4>{title}</h4>
                <p>{punchline}</p>
                <div className='flex gap-2 self-end'>
                    <button type='button' className='bg-green-500 p-1 rounded cursor-pointer' onClick={(e) => { e.stopPropagation(); setEdit(currJoke);}}>edit</button>
                    <button type='button' className='bg-red-500 p-1 rounded cursor-pointer' onClick={(e) => { e.stopPropagation(); DeleteJoke(id);}}>Delete</button>
                </div>
              </li>
            )
          })
        }
    </ul>
    </>
  )
}

export default Jokes
