import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const RootLayout = () => {
  return (
    <>
    <Header />
    <main className='flex items-center flex-col h-auto p-[20px]'>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default RootLayout
