import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages";

import { loader as landingLoader } from "../src/pages/Landing";
import { loader as cocktailLoader } from "../src/pages/Cocktail";
import { formAction as newsletterAction } from "../src/pages/NewsLetter";

const BrowserTouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        loader: cocktailLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={BrowserTouter} />;
};
export default App;
