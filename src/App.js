import { Monstermon } from "./Monstermon";

import { Header } from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// test

import "./styles.css";
import { MonstermonGrid } from "./MonstermonGrid";
import { createContext, useState } from "react";
import { monstermons } from "./config/monstermons";
import { MonstermonDetailPage } from "./MonstermonDetailPage";

export const ListingParamsContext = createContext();

function filterMonstermons(monstermons, selectedCategory) {
  return monstermons.filter((monstermon) => {
    if (!selectedCategory) return true;
    return monstermon.categories.includes(selectedCategory);
  });
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MonstermonListing />}>
          <Route path=":monstermonId" element={<MonstermonDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export function MonstermonListing() {
  const [selectedCategory, _setSelectedCategory] = useState("");
  const setSelectedCategory = (value) => {
    console.log(value);
    _setSelectedCategory(value);
  };

  const filteredMonstermons = filterMonstermons(monstermons, selectedCategory);

  return (
    <div className="App">
      <ListingParamsContext.Provider
        value={{ selectedCategory, setSelectedCategory }}
      >
        <Header />
        <hr />

        <MonstermonGrid style={{ "--card-width": "10em", "--card-gap": "1em" }}>
          {filteredMonstermons.map(({ id, image }) => (
            <Monstermon key={id} id={id} image={image} />
          ))}
          {/* <Monstermon id="001" image={drillixImage} />
          <Monstermon id="002" image={krokalisImage} />
          <Monstermon id="003" image={puncinoImage} /> */}
        </MonstermonGrid>
      </ListingParamsContext.Provider>
    </div>
  );
}
