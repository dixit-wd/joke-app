import { useJokes } from '../context/JokesContext'

const Form = () => {
   const { jokes, setForm, PostJoke, UpdateJoke } = useJokes();
   const { formData, editId } = jokes; 

  return (
    <div className='flex justify-center mb-7 w-full h-auto'>
    <form className='flex items-center gap-4 p-3 bg-gray-400 rounded-lg'>
      <div className='flex gap-2 items-center'>
        <label htmlFor="title">Title:</label>
        <input className='bg-white p-1 border-none outline-none' type="text" id='title' name='title' value={formData?.title} onChange={setForm} />
      </div>
      <div className='flex gap-2 items-center'>
        <label htmlFor="punchline">Punchline:</label>
        <input className='bg-white p-1 border-none outline-none' type="text" id='punchline' name='punchline' value={formData?.punchline} onChange={setForm} />
      </div>
      <div className='flex items-center'>
        <button type='button' className='bg-blue-500 px-2 py-1 rounded-md cursor-pointer' onClick={() => jokes?.editId ? UpdateJoke(editId, formData) : PostJoke(formData)}>{editId ? "Edit" : "Add"}</button>
      </div>
    </form>
    </div>
  )
}

export default Form
