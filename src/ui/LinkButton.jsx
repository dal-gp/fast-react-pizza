import { Link, useNavigate } from "react-router-dom";

/**
 * Reusable styled link - renders as <Link> or <button> depending on `to`.
 *
 * Special case: to="-1" renders as <button onClick={() => navigate(-1)}>.
 * React Router's <Link> cannot navigate to -1 (not a URL).
 *
 * @param {React.ReactNode} children
 * @param {string} to - URL path, or "-1" for go back
 * @returns
 */
function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  // "-1" = go back - <Link> can't handle this, use <button> with navigate(-1)
  if (to === "-1")
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
