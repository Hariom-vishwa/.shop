import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Styles/App.css";
import { Fashion } from "./Fashion";
import { Menfashion } from "./Men";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Womenfashion } from "./Women";
import { Kidsfashion } from "./Kids";
import { Error } from "./Error";
import { Footwear } from "./Footwear";
import Specs from "./WomenSpecs";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fashion",
          element: <Fashion />,
        },
        {
          path: "/fashion/menfashion",
          element: <Menfashion />,
        },
        {
          path: "/fashion/womenfashion",
          element: <Womenfashion />,
        },
        {
          path: "/fashion/kidsfashion",
          element: <Kidsfashion />,
        },
        {
          path:"/fashion/footwear",
          element: <Footwear/>
        },
        {
          path: "/specs/:itemName",
          element: <Specs/>
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
