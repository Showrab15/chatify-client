import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";


const router = createBrowserRouter([
   
      {
        path : '/signup',
        element : <SignUp></SignUp>
      },
      {
        path : "/signin",
        element : <SignIn></SignIn>
      }
   
          


]);


export default router