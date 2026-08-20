import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

/**
 * Router defined outside App - created once, not on every render.
 * createBrowserRouter required for v6.4 data APIs (loaders actions, fetchers).
 * Old <BrowserRouter> JSX style still works but cannot use these APIs.
 */
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
  // No path="*" yet - error handling (later)
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
