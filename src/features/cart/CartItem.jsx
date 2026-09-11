import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      {/* mb-1 on mobile only - reset at sm+ when flex layout takes over */}
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;

/**
 *
 *
 */
