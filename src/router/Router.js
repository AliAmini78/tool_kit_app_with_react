import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Layout from "../layout/Layout";
import CalculationToolPage from "../pages/CalculationToolPage";
import Todo from "../pages/Todo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path :"calculation-tool",
        element : <CalculationToolPage/>,
      },
      {
        path : "calculation-tool/todo",
        "element" : <Todo/>
      }
    ],
}
]);

export default router;
