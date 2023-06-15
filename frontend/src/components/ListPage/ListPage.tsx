import "./listPage.scss";
import React, { useEffect, useState } from "react";
import { getAllAutos } from "../../actions/ListPageActions";
import Auto from "../../types/Auto";
import { useNavigate } from 'react-router-dom';


export const ListPage = () => {
  const navigate = useNavigate()

  const [allAutos, setAllAutos] = useState<Auto[]>();

  useEffect(() => {
    getAllAutos(setAllAutos)
  }, []);

  return (
      <div id="car-list">
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Typ</th>
            <th>€/Tag</th>
            <th>€/km</th>
            <th className='verliehen'>Bereits verliehen</th>
          </tr>
          </thead>
          <tbody>
          {allAutos && allAutos.map((auto: any) => (
              <tr className='clickable-row' key={auto.id} onClick={()=> navigate(`auto/${auto.id}`)}>
                  <td>{auto.id}</td>
                  <td>{auto.typ}</td>
                  {auto.preisgruppe ?
                      <>
                        <td>{auto.preisgruppe.preis_tag}</td>
                        <td>{auto.preisgruppe.preis_kilometer}</td>
                      </>
                      :
                      <>
                        <td></td>
                        <td></td>
                      </>
                  }
                <td className='verliehen'>{auto.verliehen && 'X'}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};
