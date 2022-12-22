import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Layouts/Main';
import Courses from '../pages/courses/Courses';
import Program from '../pages/courses/Program';
import Home from '../pages/Home/Home';
import FourOfFour from './FourOfFour';

const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: async () => fetch('https://online-school-server-six.vercel.app/courses')

                },
                {
                    path: '/course',
                    element: <Courses></Courses>,
                    loader: async () => fetch('https://online-school-server-six.vercel.app/courses')
                },
                {
                    path: '/courses/:id',
                    element: <Program></Program>,
                    loader: async ({ params }) => fetch(`https://online-school-server-six.vercel.app/courses/${params.id}`)
                },
            ]
        },
        {
            path: '/*',
            element: <FourOfFour></FourOfFour>
        }
    ])
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
};

export default Route;