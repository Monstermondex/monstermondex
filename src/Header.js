import { CategoryFilter } from "./CategoryFilter";
import { SearchField } from "./SearchField";

export function Header() {
  return (
    <header>
      <h3>Monstermondex</h3>
      <SearchField />
      <CategoryFilter />
    </header>
  );
}
