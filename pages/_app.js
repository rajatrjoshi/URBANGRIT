import "../styles/globals.css";
import React from 'react';
import  Layout  from "../components/Layout.jsx";
import { StateContext } from "../context/StateContext.js";
import { Toaster } from "react-hot-toast";

function myApp({Component, pageProps}){
    return(
    <StateContext>
        <Layout>
            <Toaster />
            <Component {...pageProps} />
        </Layout>
    </StateContext>
    )
}

export default myApp;