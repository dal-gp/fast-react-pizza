import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";

/**
 * Global app layout - wraps every page in the app.
 * Header and CartOverview are always visible.
 * Outlet renders the current matched child route.
 */
function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;

AppLayout;
