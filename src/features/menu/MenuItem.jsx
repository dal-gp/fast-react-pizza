import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      {/* Greyed out + desaturated when sold out */}
      <img
        src={imageUrl}
        alt={name}
        className={`h-24${soldOut ? " opacity-70 grayscale" : ""}`}
      />

      {/* grow: fills remaining space so price/button align correctly */}
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>

        {/* mt-auto pushes price/button to the bottom of the flex column */}
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500 uppercase">
              Sold out
            </p>
          )}
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
