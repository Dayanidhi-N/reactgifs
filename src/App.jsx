import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import AppLayout from "./layouts/AppLayout";
import GifPage from "./pages/GifPage";
import GifProvider from "./context/GifContext";
import Ananya from "./components/Family";

//homepage
//category page
//search page
//single gif page
//favorite page

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/family",
        element: <Ananya />, // ✅ your family component
      },
    ],
  },
]);

function App() {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;
