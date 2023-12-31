import "./autoPage.scss";
import Auto from "../../types/Auto";
import {useEffect, useState} from "react";
import {getAutoById, setVerliehen} from "../../actions/AutoPageActions";
import AbgabeDialog from "./AbgabeModal";

export const AutoPage = (props: any) => {

  const [auto, setAuto] = useState<Auto>();

  const [showModal, setShowModal] = useState(false);

    const [berechnung, setBerechnung] = useState(0);

    const openModal = () => {
        document.body.classList.add('modal-open');
        setShowModal(true);
    };

    const closeModal = () => {
        document.body.classList.remove('modal-open');
        let berechnungDiv = document.querySelector(".berechnung") as HTMLElement
        berechnungDiv.style.display = "none"
        setShowModal(false);
        setBerechnung(0)
    };

  useEffect(() => {
    getAutoById(props.id, setAuto)
  }, []);

    function handleAbgabe(kilometer: String, tage: String, preis_kilometer: number | undefined , preis_tag: number | undefined) {
        if ( preis_tag && preis_kilometer){
            setBerechnung(preis_kilometer * Number(kilometer) + preis_tag * Number(tage))
        }
        let modalContent = document.querySelector(".modal-content") as HTMLElement
        let berechnungDiv = document.querySelector(".berechnung") as HTMLElement
        modalContent.style.display = "none"
        berechnungDiv.style.display = "flex"
    }

  return (
      <div>
        <button className="back-btn" onClick={event => window.location.href = '/'}>
          Home
        </button>
        <div className="page--auto">
          <main>
            {auto && (
                <div className="auto-details">
                  <h1>{auto.hersteller} {auto.typ}</h1>
                  <div id={"content"}>
                    <ul>
                      <li><span className="label">ID:</span> {auto.id}</li>
                      <li><span className="label">Kennzeichen:</span> {auto.kennzeichen}</li>
                      <li><span className="label">Baujahr:</span> {auto.baujahr}</li>
                      <li><span className="label">PS:</span> {auto.ps}</li>
                      <li><span className="label">ccm:</span> {auto.ccm}</li>
                      <li><span className="label">Farbe:</span> {auto.farbe}</li>
                      <li><span className="label">Kraftstoff:</span> {auto.kraftstoff}</li>
                      <li><span className="label">Sitzplätze:</span> {auto.sitzplaetze}</li>
                      <li><span className="label">Extras:</span> {auto.extras}</li>
                      <li><span className="label">Zubehör:</span> {auto.zubehoer}</li>
                      <li><span className="label">VersicherungsNr:</span> {auto.versicherungsNr}</li>
                      <li><span className="label">TÜV:</span> {auto.tuev}</li>
                      <li><span className="label">ASU:</span> {auto.asu}</li>
                      <li><span
                          className="label">Verfügbarkeit:</span> {auto.verliehen ? 'Verliehen' : 'Nicht verliehen'}
                      </li>
                      {auto.preisgruppe && (
                          <>
                            <li><span className="label">€/Tag:</span> {auto.preisgruppe.preis_tag}</li>
                            <li><span className="label">€/km:</span> {auto.preisgruppe.preis_kilometer}</li>
                          </>
                      )}
                    </ul>
                    <div id="img-card">
                      <img src={require("../../images/" + auto.id + ".jpg")} alt="No image found"/>
                    </div>
                  </div>
                  <div className="modal-wrapper">
                    <div className="modal-overlay">
                        {showModal && (
                            <div>
                                <AbgabeDialog
                                    onConfirm={(kilometer: string, tage: string): any => {
                                        handleAbgabe(kilometer, tage, auto.preisgruppe?.preis_kilometer, auto.preisgruppe?.preis_tag);
                                        setVerliehen(auto.id, setAuto);
                                    }}
                                    onCancel={closeModal}
                                    berechnung={berechnung}
                                />
                            </div>
                        )}
                    </div>
                  </div>
                  <div>
                    {auto.verliehen ? (
                        <button className="verleihen-btn" onClick={() => {
                          openModal();
                        }}>
                          Auto Zurückgeben
                        </button>
                    ) : (
                        <button className="verleihen-btn" onClick={() => setVerliehen(auto.id, setAuto)}>
                          Auto Verleihen
                        </button>
                    )}
                  </div>
                </div>
            )}
          </main>
        </div>
      </div>
  )
}
