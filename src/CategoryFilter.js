import { useContext } from "react";
import { ListingParamsContext } from "./App";

const CATEGORIES = [
  "Halloween",
  "Christmas",
  "Easter",
  "Valentine",
  "Sankthans",
  "Vildedagen"
];

export function CategoryFilter() {
  const { setSelectedCategory } = useContext(ListingParamsContext);
  return (
    <select onChange={(e) => setSelectedCategory(e.target.value)}>
      <option value="">EVENT</option>
      {CATEGORIES.sort().map((category) => (
        <option value={category}>{category}</option>
      ))}
    </select>
  );
}
