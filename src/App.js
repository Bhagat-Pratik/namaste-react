import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components.js/Header";
import Body from "./components.js/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components.js/About";
import Contact from "./components.js/Contact";
import Error from "./components.js/Error";
import RestaurantMenu from "./components.js/RestaurantMenu";
// import useRestaurantMenu from "./utils/useRestaurantMenu";
// import Grocery from "./components.js/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import Cart from "./components.js/Cart";
import appStore from "./utils/appStore";

//Chunking
//Code Splitting
//Dynamic Bundling
//lazy loading
//on demand loading


 
//not using key (not acceptable)<<<idex as key<<<<unique id(best practice)

const Grocery=lazy(()=>import("./components.js/Grocery"))
const About=lazy(()=>import("./components.js/About"))


const AppLayout=()=>{
    const [UserName,setUserName]=useState();
    useEffect(()=>{
        const data={
            name: "Pratik Bhagat",
        };
        setUserName(data.name);
    },[])

    
    return(
        <Provider store={appStore}>
        <UserContext.Provider value ={{LoggedInUser: UserName,setUserName}}> 
        <div className="app">
            <Header/>
            <Outlet/>
        </div>   
        </UserContext.Provider>
        </Provider>
    )
}


const appRouter=createBrowserRouter([{
    path:"/",
    element:<AppLayout />,
    children:[
        {
            path:"/",
            element:<Body />,
        },
        {
            path:"/about",
            element:<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
        },
        {
            path:"/contact",
            element:<Contact />
        },
        {
            path:"grocery",
            element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>

        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu />

        },

        {
            path:"/cart",
            element:<Cart/>
        },

    ],
    errorElement:<Error />
},

]);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/> );

