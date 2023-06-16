import "./autoPage.scss";
import Auto from "../../types/Auto";
import { useEffect, useState } from "react";
import {getAutoById, setVerliehen} from "../../actions/AutoPageActions";

export const AutoPage = (props:any) => {

  const [auto, setAuto] = useState<Auto>();

  useEffect(() => {
    getAutoById(props.id, setAuto)
  }, []);

  return (
      <div className="page--auto">
        <main>
          {auto && (
              <div className="auto-details">
                <h1>{auto.hersteller} {auto.typ}</h1>
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
                  <li><span className="label">Verliehen:</span> {auto.verliehen ? 'Verliehen' : 'Nicht verliehen'}</li>
                  {auto.preisgruppe && (
                      <>
                        <li><span className="label">€/Tag:</span> {auto.preisgruppe.preis_tag}</li>
                        <li><span className="label">€/km:</span> {auto.preisgruppe.preis_kilometer}</li>
                      </>
                  )}
                </ul>

                <button className="verleihen-btn" onClick={() => setVerliehen(auto.id, setAuto)}>
                  Auto verleihen
                </button>
              </div>
          )}
        </main>
      </div>
  );
};













