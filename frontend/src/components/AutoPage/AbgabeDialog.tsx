import {useState} from "react";
import './abgabeDialog.scss';

type ModalProps = {
    onConfirm: (kilometer: string, tage: string) => any;
    onCancel: () => void;
};

function AbgabeDiaglog({onConfirm, onCancel}: ModalProps){

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

    return (
        <div className="modal">
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
export default AbgabeDiaglog;