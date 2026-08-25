import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

/**
 * Global app header - always visible on every page.
 * Contains company name link and placeholder username.
 */
function Header() {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
