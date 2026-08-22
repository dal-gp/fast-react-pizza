import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Search field in the header - navigates to /order/:orderId on submit.
 * Wrapped in a form so pressing Enter submits without a button.
 */
function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
