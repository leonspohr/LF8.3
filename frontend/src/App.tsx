import React, { useEffect, useState } from 'react';
import './App.css';
import { ListPage } from "./components/ListPage/ListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoPage } from "./components/AutoPage/AutoPage";
import Auto from "./types/Auto";
import { getAllAutos } from "./actions/ListPageActions";

function App() {

  const [allAutos, setAllAutos] = useState<Auto[]>([]);

  useEffect(() => {
    getAllAutos(setAllAutos)
  }, []);

  let autoRoutes;
  if (allAutos instanceof Array) {
    // @ts-ignore
    autoRoutes = allAutos.map(auto =>
        {
          return <Route
              path={"/auto/" + auto.id}
              element={<AutoPage id={auto.id} />}
              key={auto.id}
          />
        }
    );
  }

  return (
      <BrowserRouter>
        <Routes>
          {autoRoutes && autoRoutes}
          <Route
              path="/"
              element={ <ListPage /> }
          />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
