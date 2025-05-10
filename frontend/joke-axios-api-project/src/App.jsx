import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layout/RootLayout";
import './App.css'
import Home from './pages/home';
import Jokes from './pages/jokes';
import { JokesProvider } from './context/JokesContext';
import Jokes_details from './components/UI/Jokes_details';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/jokes",
          element: <Jokes />
        },
        {
          path: "/jokes/:jokeId",
          element: <Jokes_details />
        }
      ]
    }
  ])

  return (
    <>
    <JokesProvider>
     <RouterProvider router={router} />
    </JokesProvider>
    </>
  )
}

export default App
