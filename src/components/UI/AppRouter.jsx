import React, {useContext, useState} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Error from "../../pages/Error";
import {SwitchTransition} from "react-transition-group";
import PostIdPage from "../../pages/PostIdPage";
import {privateRoutes, publicRoutes} from "../../router/router";
import {AuthContext} from "../../context";
import Loader from "./Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    console.log(isAuth)

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
                <Routes>
                    {privateRoutes.map(route =>
                            <Route
                                path={route.path}
                                element={route.component}
                                exact={route.exact}
                                key={route.path}
                            />
                    )}
                </Routes>
            :
                <Routes>
                    {publicRoutes.map(route =>
                            <Route
                                path={route.path}
                                element={route.component}
                                exact={route.exact}
                                key={route.path}
                            />
                    )}
                </Routes>
    );
};

export default AppRouter;