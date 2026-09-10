import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

/**
 * Sticky cart summary bar shown at the bottom of every page.
 * Returns null when cart is empty - no point showing an enpty bar.
 */
function CartOverview() {
  /**
   * Using named selector functions (not inline) so other componenets
   * can import and reuse the same derived values without duplication.
   */
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  // Hide when cart is empty
  if (!totalCartQuantity) return null;
  return (
    // Split p-4 -> px-4 py-4 so sm:px-6 can override px direction only
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart"> Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
