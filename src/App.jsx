import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./component/Layout/Main";
import Home from "./component/Home/Home/Home";
import Destination from "./component/Destination/Destination";
import Technology from "./component/Technology/Technology";
import Crew from "./component/Crew/Crew";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/destination",
          loader: () => {
            return fetch("destination.json");
          },
          element: <Destination />,
        },
        {
          path: "/crew",
          element: <Crew />,
        },
        {
          path: "/technology",
          element: <Technology />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
