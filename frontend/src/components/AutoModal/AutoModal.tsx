import { useState } from 'react';
import Auto from "../../types/Auto";
import '../AutoPage/abgabeModal.scss';
import {saveAuto} from "../../actions/AutoModalActions";
import autoAttributes from "../../util/autoAttributes";

export const AutoModal = ({onClose}:modalProps) => {

  const initialAutoData = {
    id: undefined,
    kennzeichen: '',
    hersteller: '',
    typ: '',
    baujahr: undefined,
    ps: undefined,
    ccm: undefined,
    farbe: '',
    kraftstoff: '',
    sitzplaetze: undefined,
    extras: '',
    zubehoer: '',
    versicherungsNr: '',
    tuev: '',
    asu: '',
    verliehen: false,
  };

  const [auto, setAuto] = useState<Auto>(initialAutoData);

  const handleFormSubmit = () => {
    saveAuto(auto)
    onClose();
  };

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setAuto((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
      <div className="modal-wrapper">
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Neues Auto anlegen</h2>
              <div className="input-wrapper">

                {/*@ts-ignore*/}
                <form onSubmit={handleFormSubmit}>
                  {autoAttributes.map((key:string) => (
                      <div>
                      {/*@ts-ignore*/}
                      <label id={key}>{key}:</label>
                        {/*@ts-ignore*/}
                        <input type="text" name={key} value={auto[key]}
                               onChange={handleChange}
                        />
                        </div>
                  ))}

                  <div className="modal-buttons">
                    <button type="submit">Auto anlegen</button>
                    <button type="button" onClick={onClose}>
                      Abbrechen
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export interface modalProps {
  onClose: () => any
}
