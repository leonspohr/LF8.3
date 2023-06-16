import "./autoPage.scss";
import Auto from "../../types/Auto";
import { useEffect, useState } from "react";
import {getAutoById, setVerliehen} from "../../actions/AutoPageActions";
import AbgabeDialog from "./abgabeDialog";

export const AutoPage = (props:any) => {

    const [auto, setAuto] = useState<Auto>();

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
    getAutoById(props.id, setAuto)
  }, []);

    function handleAbgabe(kilometer: String, tage: String){
        console.log(kilometer + " " + tage)
    }

  return (
      <div className="page--auto">
        <main>
          {auto &&
              <div>
                <h1>{auto.hersteller} {auto.typ}</h1>
                <ul>
                  <li>id             {auto.id}</li>
                  <li>kennzeichen    {auto.kennzeichen}</li>
                  <li>baujahr        {auto.baujahr}</li>
                  <li>ps             {auto.ps}</li>
                  <li>ccm            {auto.ccm}</li>
                  <li>farbe          {auto.farbe}</li>
                  <li>kraftstoff     {auto.kraftstoff}</li>
                  <li>sitzplaetze    {auto.sitzplaetze}</li>
                  <li>extras         {auto.extras}</li>
                  <li>zubehoer       {auto.zubehoer}</li>
                  <li>versicherungsNr {auto.versicherungsNr}</li>
                  <li>tuev           {auto.tuev}</li>
                  <li>asu            {auto.asu}</li>
                  <li>Verfügbarkeit:      {auto.verliehen ? ' Verliehen' : " Verfügbar"}</li>
                  {auto.preisgruppe &&
                      <>
                        <li>{auto.preisgruppe.preis_tag}</li>
                        <li>{auto.preisgruppe.preis_kilometer}</li>
                      </>
                  }
                </ul>
                {showModal && (
                  <AbgabeDialog
                      onConfirm={(kilometer: string, tage: string):any => {
                          handleAbgabe(kilometer, tage)
                          setVerliehen(auto.id, setAuto)
                          closeModal();
                      }}
                      onCancel={closeModal}
                  />
                )}
                  <div>
                      { auto.verliehen ? (
                              <button onClick={() => {
                                  openModal();
                              }}>
                                  Auto Zurückgeben
                              </button>
                          ) : (
                              <button onClick={() =>
                                  setVerliehen(auto.id, setAuto)
                              }>
                                  Auto Ausleihen
                              </button>
                          )}
                  </div>
              </div>
          }
        </main>
      </div>
  );
}













