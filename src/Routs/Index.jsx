import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Login from './../Page/Login';
import Register from "../Page/Register";
import AdminLayOut from "../Components/layOut/AdminLayout"
import AddServis from "../Page/AddServis";
import Home from "../Page/Home";
import PrivateRoute from "./PrivateRoute";


const Index = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                // path:"/",
                index:true,
                element:<Home></Home>
            },
            {
                path:"about",
                element:<PrivateRoute>
                    <About></About>
                         </PrivateRoute>
            },
            {
                path:"contact",
                element:<Contact></Contact>
            }
        ]

    },
    {
        path:"login",
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:"/admin",
        element:<AdminLayOut></AdminLayOut>,
        children:[
            {
                path:"addService",
                element:<AddServis></AddServis>
            }
        ]
    }
])

export default Index;