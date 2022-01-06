import { useContext } from "react";
import { ListingParamsContext } from "./App";

export function SearchField() {
  const { setSearchQuery } = useContext(ListingParamsContext);
  return (
    <input
      type="text"
      placeholder="Søk her"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
