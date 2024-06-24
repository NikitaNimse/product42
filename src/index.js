import ReactDOM from "react-dom/client";
import Home from "./views/Home/Home"
import ProductView from "./views/productView/ProductView";
import{
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom"

import BlogCard from "./components/Productcard/Productcard";


const root = ReactDOM.createRoot(document.getElementById("root"))
const router =  createBrowserRouter([
    {
        path:"/",
        element:< Home/>
    },
    {
        path:"/product/:id",
        element:<ProductView/>
    },

])
root.render(<RouterProvider router={router}/>)