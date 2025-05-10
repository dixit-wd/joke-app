import { NavLink } from 'react-router'

const Header = () => {
  return (
    <>
     <nav className='flex w-full px-[20px] h-[60px] items-center bg-blue-500 justify-between'>
      <div className='logo font-bold text-black'>
        MyJoke
      </div>
      <ul className='lg:flex hidden gap-3'>
        <li><NavLink to={"/"} className={({ isActive }) => isActive ? "text-cyan-200 font-bold" : "text-black"}>Home</NavLink></li>
        <li><NavLink to={"/jokes"} className={({ isActive }) => isActive ? "text-cyan-200 font-bold" : "text-black"}>Jokes</NavLink></li>
      </ul>
     </nav>
    </>
  )
}

export default Header
