import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Conversations from "../Pages/Conversations";
import Message from "../Pages/Message";


const router = createBrowserRouter([
   {
    path : '/convo',
    element : <Conversations></Conversations>
   },
      {
        path : '/signup',
        element : <SignUp></SignUp>
      },
      {
        path : "/signin",
        element : <SignIn></SignIn>
      },
      {
        path : '/message',
        element : <Message></Message>
      }
   
          


]);


export default router