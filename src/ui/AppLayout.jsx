import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

/**
 * Global app layout - wraps every page in the app.
 * Header and CartOverview are always visible.
 * Outlet renders the current matched child route.
 */
function AppLayout() {
  /**
   * useNavigation (NOT useNavigate) - returns global router navigation state.
   * state: 'idle' | 'loading' | 'submitting'
   * 'loading' = any route's loader is currenly running
   */
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(navigation);
  return (
    <div>
      {/* Loader overlays the entire page - Header, main, and CartOverview still visible */}
      {isLoading && <Loader />}
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
