import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<main/>
        }
      ]
    },
  ]);

  export default router;