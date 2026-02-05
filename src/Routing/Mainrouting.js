import { createBrowserRouter } from "react-router-dom";
import MyImagesComp from "../components/MyImagesComp";
import DashboardComp from "../layout/Dashboardcomp";
import NavComp from "../layout/NavComp"
import PageNotFoundComp from "../layout/PageNotFoundComp"
import HooksComp from "../Reacthooks/HooksComp";
import UseStateComp from "../Reacthooks/UseStateComp";
import UseEffectComp from "../Reacthooks/UseEffectComp";

const router=createBrowserRouter([
   {path:"images",element:<MyImagesComp/>},
   {path:"",element:<DashboardComp/>},
   {path:"navbar/id",element:<NavComp/>},
   {path:"*",element:<pagenotfoundcomp/>},
   {path:"hooks",element:<HooksComp/>,children:[
    {path:"usestate",element:<UseStateComp/>},
    {path:"useeffect",element:<UseEffectComp/>}
   ]}
])