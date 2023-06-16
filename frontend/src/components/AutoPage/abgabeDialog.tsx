import {useState} from "react";

type ModalProps = {
    onConfirm: (kilometer: string, tage: string) => any;
    onCancel: () => void;
};

function abgabeDiaglog({onConfirm, onCancel}: ModalProps){

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
    <button onClick={handleConfirm}>Bestätigen</button>
        <button onClick={handleCancel}>Abbrechen</button>
        </div>
        </div>
        </div>
);
}
export default abgabeDiaglog;