
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NewsDetails from '../components/NewsDetails';
import PrivateRoute from '../provider/PrivateRoute';
import Loading from '../Pages/Loading';
import AboutLayout from '../Layouts/AboutLayout';
import CareerLayout from '../Layouts/CareerLayout';


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/category/:id",
                loader: () => fetch("/news.json"),
                hydrateFallbackElement:<Loading></Loading> ,
                Component: CategoryNews
            },
            {
                path: "/about",
                Component:AboutLayout
            },
            {
                path: "/career",
                Component: CareerLayout
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/login",
                Component: Login
            },
            {
                path: "/auth/register",
                Component: Register
            }
        ]
    },
    {
        path: "/news-details/:id",
        loader: () => fetch("/public/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
            <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>
        )
    },
])

export default router;