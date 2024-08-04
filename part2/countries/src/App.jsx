import { useState, useEffect } from "react";
import Search from "./components/Search";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <Countries
        search={search}
        setSearch={setSearch}
        countries={countries}
        setCountries={setCountries}
      />
    </div>
  );
}

export default App;
