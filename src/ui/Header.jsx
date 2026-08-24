import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

/**
 * Global app header - always visible on every page.
 * Contains company name link and placeholder username.
 */
function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Dal</p>
    </header>
  );
}

export default Header;
