import React, { useState} from "react";
import Auto from "../../types/Auto";
import {useNavigate} from 'react-router-dom';
import {Searchbar} from "../Searchbar/Searchbar";
import './listPage.scss';
import '../AutoPage/abgabeModal.scss';
import { AutoModal } from "../AutoModal/AutoModal";


export const ListPage = () => {
	const navigate = useNavigate();

	const [ showModal, setShowModal ] = useState(false);
	const [ allAutos, setAllAutos ] = useState<Auto[]>([]);

  const convertNumberToEuro = (preis: number): string => {
    if (preis) {
      const formattedNumber = preis.toLocaleString("eu-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return formattedNumber + "€"
    }
    return "0,00€"
  }

  const openModal = () => {
    document.body.classList.add('modal-open');
    setShowModal(true);
  };

  const closeModal = () => {
    document.body.classList.remove('modal-open');
    setShowModal(false);
  };

  return (
      <div id={"main"}>
        <img src={require("../../images/antiquecar.png")} alt={"Image not found."}/>

        <div id="car-list">
          <Searchbar setAllAutos={setAllAutos}/>

          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Hersteller</th>
              <th>Typ</th>
              <th>Farbe</th>
              <th>€/Tag</th>
              <th>€/km</th>
            </tr>
            </thead>
            <tbody>
            {allAutos && allAutos?.length > 0 && allAutos?.map((auto: any) => (
                <tr className={`clickable-row ${auto.verliehen && 'verliehen'}`} key={auto.id}
                    onClick={() => navigate(`auto/${auto.id}`)}>
                  <td>{auto.id}</td>
                  <td>{auto.hersteller}</td>
                  <td>{auto.typ}</td>
                  <td>{auto.farbe}</td>
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
                </tr>
            ))}
            </tbody>
            <button className='new-auto-modal' onClick={openModal}>Neues Auto</button>
          </table>

          {showModal && <AutoModal onClose={closeModal}/>}
        </div>
      </div>
  );
};
