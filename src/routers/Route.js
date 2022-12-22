import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Layouts/Main';
import Login from '../pages/account/Login/Login';
import Signup from '../pages/account/Signup/Signup';
import Courses from '../pages/courses/Courses';
import Program from '../pages/courses/Program';
import Home from '../pages/Home/Home';
import Blog from '../pages/shared/Blog/Blog';
import Checkout from './Checkout';
import FourOfFour from './FourOfFour';
import PrivateRouter from './PrivateRouter';

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
                    element: <PrivateRouter><Program></Program></PrivateRouter>,
                    loader: async ({ params }) => fetch(`https://online-school-server-six.vercel.app/courses/${params.id}`)
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/checkout',
                    element: <PrivateRouter> <Checkout></Checkout></PrivateRouter>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <Signup></Signup>
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