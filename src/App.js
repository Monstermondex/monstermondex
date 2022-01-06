import { Monstermon } from "./Monstermon";

import { Header } from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function filterMonsterMonsBySearchQuery(monstermons, query) {
  return monstermons.filter(({ id, name }) => {
    const monstermonTokens = `${id} ${name}`.toLowerCase().split(" ");
    const searchTokens = query.toLowerCase().trim().split(" ");
    return searchTokens.every((sToken) =>
      monstermonTokens.some((mToken) => {
        return mToken.indexOf(sToken) !== -1;
      })
    );
  });
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MonstermonListing />} />
        <Route path="monstermons" element={<MonstermonListing />} />
        <Route
          path="monstermons/:monstermonId"
          element={<MonstermonDetailPage />}
        />
      </Routes>
      {/*<Route path="/">
          <Route index element={<MonstermonListing />} />
          <Route path="monstermons" element={<MonstermonListing />}>
            <Route path=":monstermonId" element={<MonstermonDetailPage />} />
          </Route>
        </Route>
       </Routes>*/}
    </BrowserRouter>
  );
}

export function MonstermonListing() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMonstermons1 = filterMonstermons(monstermons, selectedCategory);
  const filteredMonstermons2 = filterMonsterMonsBySearchQuery(
    filteredMonstermons1,
    searchQuery
  );

  return (
    <div className="App">
      <ListingParamsContext.Provider
        value={{
          selectedCategory,
          setSelectedCategory,
          searchQuery,
          setSearchQuery
        }}
      >
        <Header />
        <hr />

        <MonstermonGrid style={{ "--card-width": "10em", "--card-gap": "1em" }}>
          {filteredMonstermons2.map(({ id, image }) => (
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
