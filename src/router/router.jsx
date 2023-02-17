import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ContactUs from '../Pages/ContactUs/ContactUs'
import NotFound from '../Pages/Responses/404';
import Post from '../pages/Post/Post';
import SinglePost from "../pages/Post/Single/SinglePost";
import CreatePost from "../pages/Post/Create/CreatePost";
import Layout from '../layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/post/:id",
        element: <SinglePost />,
      },
      {
        path: "/post/create",
        element: <CreatePost/>,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
}
]);

export default router;
