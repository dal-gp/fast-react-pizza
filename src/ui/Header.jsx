import { Link } from "react-router-dom";

/**
 * Global app header - always visible on every page.
 * Contains company name link and placeholder username.
 */
function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <p>Dal</p>
    </header>
  );
}

export default Header;
