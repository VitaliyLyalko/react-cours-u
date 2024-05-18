import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import {Navigate} from "react-router-dom";

export const privateRoutes = [
    {path: '/about', component: <About/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostIdPage/>, exact: true},
    {path: '/login', component: <Navigate to="/posts" />, exact: true},
]

export const publicRoutes = [
    {path: '/about', component: <Navigate to="/login" />, exact: true},
    {path: '/posts', component: <Navigate to="/login" />, exact: true},
    {path: '/login', component: <Login/>, exact: true},
    {path: '/', component: <Navigate to="/login" />, exact: true},
]