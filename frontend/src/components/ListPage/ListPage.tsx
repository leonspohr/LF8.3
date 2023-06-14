import "./listPage.scss";
import React, { useEffect, useState } from "react";
import { getAllAutos } from "../../actions/ListPageActions";
import Auto from "../../types/Auto";


export const ListPage = () => {

  const [allAutos, setAllAutos] = useState<Auto[]>();

  useEffect(() => {
    getAllAutos(setAllAutos)
  }, []);

  return (
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Typ</th>
          <th>€/Tag</th>
          <th>€/km</th>
        </tr>
        </thead>
        <tbody>
        {allAutos && allAutos.map((auto: any) => (
            <tr key={auto.id}>
              <td>{auto.id}</td>
              <td>{auto.typ}</td>
              <td>{auto.tagPrice}</td>
              <td>{auto.kmPrice}</td>
            </tr>
        ))}
        </tbody>
      </table>
  );
};
