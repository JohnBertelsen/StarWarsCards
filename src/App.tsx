import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './views/home';
import Game from './views/game';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/game",
    element: <Game></Game>
  }
])

export default function App() {
  return (
    <main className="body-medium min-h-screen bg-background text-on-background">
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}