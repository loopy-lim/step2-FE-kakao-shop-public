import Toast from "@/pages/Toast";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <h1>hello world</h1>,
    path: "/",
  },
  {
    element: <Toast />,
    path: "/toast",
  },
]);

export { router };