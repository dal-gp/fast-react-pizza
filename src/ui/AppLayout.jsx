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
   * useNavigation (NOT useNav, main, gate) - returns global router navigation state.
   * state: 'idle' | 'loading' | 'submitting'
   * 'loading' = any route's loader is currenly running
   */
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  // console.log(navigation);
  return (
    /**
     * 3-row grid layout:
     *   row 1 (auto) → Header takes only what it needs
     *   row 2 (1fr) → scrollable content area fills remaining space
     *   row 3 (auto) → CartOverview pinned to bottom
     * h-screen → fills full viewport height (100vh)
     */
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {/* Loader overlays the entire page - Header, main, and CartOverview still visible */}
      {isLoading && <Loader />}
      <Header />
      {/**
        * Wrapper div needed because mx-auto doesnot center grid items
      directly.
        * overflow-scroll: content scrolls within this area -
      CartOverview stays pinned.
        * No spacing here - each page component
      controls its own top/botto margin. */}
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;

AppLayout;
