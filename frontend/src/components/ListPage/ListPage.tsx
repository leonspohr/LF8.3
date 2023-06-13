import "./listPage.scss";
import React, {useEffect, useState} from "react";
import { Auto } from "../Auto/auto";
import { getAllCars } from "../../actions/ListPageActions";

export const ListPage = () => {

  const [allAutos, setAllAutos] = useState();

  useEffect(() => {
    getAllCars(setAllAutos)
  }, []);

  let autoElements;
  console.log(allAutos)

  if (allAutos != undefined) {
    // @ts-ignore
    autoElements = allAutos.map((car: { id: any; }) =>
        <Auto
            {...car}
            key={car.id}
        />
    );
  }

  return (
      <div className="page--list">
        <main>
          <div className="car-list">
            {autoElements}
          </div>
        </main>
      </div>
  );
};
