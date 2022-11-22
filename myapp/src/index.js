import React from "react";
import { createRoot } from 'react-dom/client';
import "./functionBased/App.css";
import { createBrowserRouter, RouterProvider, } from "react-router-dom"

import TodoContainer from "./functionBased/components/TodoContainer"
import About from "./functionBased/components/About"
import ErrorPage from "./functionBased/components/ErrorPage"


// TodoContainer component
const container = document.getElementById("root")
const root = createRoot(container)

const router = createBrowserRouter([
    {
        path: "/",
        element: <TodoContainer />,
        errorElement: <ErrorPage />, 
    },
    {
        path: "/about",
        element: <About />,
        text: "About"
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
