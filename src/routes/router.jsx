import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Practice from "../pages/Practice";
import RoomVisualizer from "../pages/RoomVisualizer";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/practice",
                element: <Practice/>
            },
            {
                path:"/roomvisualizer",
                element: <RoomVisualizer/>
            }
        ]
    }
])
