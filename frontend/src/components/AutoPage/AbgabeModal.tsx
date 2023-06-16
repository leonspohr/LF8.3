import {useState} from "react";
import './abgabeModal.scss';

type ModalProps = {
  onConfirm: (kilometer: string, tage: string) => any;
  onCancel: () => void;
  berechnung: number
};

function AbgabeModal({onConfirm, onCancel, berechnung}: ModalProps){

  const [kilometer, setKilometer] = useState("");
  const [tage, setTage] = useState("");

  const handleConfirm = () => {
    onConfirm(kilometer, tage);
    setKilometer("");
    setTage("");
  };

  const handleCancel = () => {
    onCancel();
    setKilometer("");
    setTage("");
  };

  const handleExit = () => {
    onCancel();
  }

  return (
      <div className="modal">
        <div className="berechnung">
          <span id="margin-span">Dem Kunden sind {berechnung}€ zu berechnen </span>
          <button onClick={handleExit}>Schließen</button>
        </div>
        <div className="modal-content">
          <h2>Autoverleih</h2>
          <div className="input-wrapper">
            <label htmlFor="kilometers">Kilometer:</label>
            <input
                type="number"
                id="kilometers"
                value={kilometer}
                onChange={(e) => setKilometer(e.target.value)}
            />
            <label htmlFor="days">Tage:</label>
            <input
                type="number"
                id="days"
                value={tage}
                onChange={(e) => setTage(e.target.value)}
            />
            <div className="modal-buttons">
              <button id="confirm-modal-button" onClick={handleConfirm}>Preis Berechnen</button>
              <button onClick={handleCancel}>Abbrechen</button>
            </div>
          </div>
        </div>
      </div>
  );
}
export default AbgabeModal;