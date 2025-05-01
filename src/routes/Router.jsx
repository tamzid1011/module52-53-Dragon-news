
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';

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
                hydrateFallbackElement: <span className="loading loading-dots loading-xl"></span> ,
                Component: CategoryNews
            }
        ]
    }
])

export default router;