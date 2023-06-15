import "./autoPage.scss";
import Auto from "../../types/Auto";
import { useEffect, useState } from "react";
import { getAutoById } from "../../actions/AutoPageActions";

export const AutoPage = (props:any) => {

  const [auto, setAuto] = useState<Auto>();

  useEffect(() => {
    getAutoById(props.id, setAuto)
  }, []);

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
                  <li>verliehen      {auto.verliehen}</li>
                  {auto.preisgruppe &&
                      <>
                        <li>{auto.preisgruppe.preis_tag}</li>
                        <li>{auto.preisgruppe.preis_kilometer}</li>
                      </>
                  }
                </ul>
              </div>
          }
        </main>
      </div>
  );
}













