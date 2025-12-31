import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/main-layout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                lazy: {
                    Component: async() =>{
                        const component = await import("../pages/app")
                        return component.default
                    }
                }
            },
            {
                path: "predict",
                lazy: {
                    Component: async() =>{
                        const component = await import("../pages/predict-heart-attack")
                        return component.default
                    }
                }
            },
        ]
    },
    

]);
export default router;