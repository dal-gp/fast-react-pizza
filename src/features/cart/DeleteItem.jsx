import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

/**
 * Reusable delete button for cart items.
 * Used in both CartItem (cart page) and MenuItem (menu page).
 * Co-located in cart feature since it dispatches a cart action.
 *
 * @param {number} pizzaId - ID of pizza to remove from cart
 * @returns
 */
function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
