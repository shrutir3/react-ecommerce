import { createBrowserRouter } from "react-router";
import HomePage from '../pages/Home';
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
    {
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: HomePage
            }
        ]
    }
]);

export default router;