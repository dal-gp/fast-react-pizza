import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
// Rename on import - App.jsx will have multiple loaders
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

/**
 * Router defined outside App - created once, not on every render.
 * createBrowserRouter required for v6.4 data APIs (loaders actions, fetchers).
 * Old <BrowserRouter> JSX style still works but cannot use these APIs.
 */
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />, // fallback - catches 404s and unexpected errors
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader, // Step 2: connect loader to route
        errorElement: <Error />, // catches loader errors within the layout
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />, // shows within layout when order not found
      },
    ],
  },
  // No path="*" yet - error handling (later)
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
