import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  /**
   * Read quantity of THIS pizza from Redux - needed to pass to UpdateItemQuantity.
   * Uses parameterized selector so we can specify the pizzaId.
   */
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      {/* mb-1 on mobile only - reset at sm+ when flex layout takes over */}
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
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
