import "./listPage.scss";
import React, {useEffect, useState} from "react";
import Auto from "../../types/Auto";
import { useNavigate } from 'react-router-dom';
import { Searchbar } from "../Searchbar/Searchbar";


export const ListPage = () => {
  const navigate = useNavigate()

  const [allAutos, setAllAutos] = useState<Auto[]>([]);

  const convertNumberToEuro = (preis:number) : string => {
    if(preis){
      const formattedNumber = preis.toLocaleString("eu-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return formattedNumber + "€"
    }
    return "0,00€"
  }

  return (
      <div>
        <Searchbar setAllAutos={setAllAutos}/>
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
            {allAutos && allAutos?.length > 0 && allAutos?.map((auto: any) => (
                <tr className='clickable-row' key={auto.id} onClick={()=> navigate(`auto/${auto.id}`)}>
                  <td>{auto.id}</td>
                  <td>{auto.typ}</td>
                  {auto.preisgruppe ?
                      <>
                        <td>{convertNumberToEuro(auto.preisgruppe.preis_tag)}</td>
                        <td>{convertNumberToEuro(auto.preisgruppe.preis_kilometer)}</td>
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
      </div>
  );
};
