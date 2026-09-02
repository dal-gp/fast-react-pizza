import { Link } from "react-router-dom";

/**
 * Reusable styled button.
 * Renders as <Link> when `to` prop is provided (e.g. "Order pizzas" -> /order/new).
 * Renders as <button> otherwise.
 *
 * @param {React.ReactNode} children
 * @param {boolean} disabled - passed to button element
 * @param {string} [to] - if provided, renders as Link
 * @param {string} type - type of button to display
 */
function Button({ children, disabled, to, type }) {
  /**
   * Base: styles common to ALL button variants.
   * Each variant adds its own padding and text size on top of base.
   * Object lookup (styles[type]) is cleaner than if/else chains.
   */
  const base =
    "corner transitions-colors inline-block rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    secondary:
      "px-4 py-2.5 md:px-6 md:py-3.5 border-2 border-stone-300 corner transitions-colors inline-block rounded-full  focus:text-stone-800 font-semibold tracking-wide hover:text-stone-800 text-stone-800 uppercase duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ",
    small: base + " px-4 px-2 md:px-5 md:py-2.5 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
