import "../styles/globals.css";
import React from 'react';
import  Layout  from "../components/Layout.jsx";

function myApp({Component, pageProps}){
    return(
    <Layout>
        <Component {...pageProps} />
    </Layout>
    )
}

export default myApp;