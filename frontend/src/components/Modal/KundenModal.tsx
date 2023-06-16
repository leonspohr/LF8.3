import { useEffect, useState } from 'react';
import Kunde from '../../types/Kunde';

export interface modalProps {
	onClose: () => any
}
export const KundenModal = ({onClose}:modalProps) => {
	const [nachname, setNachname] = useState('');
	const [vorname, setVorname] = useState('');
	const [strasse, setStrasse] = useState('');
	const [ort, setOrt] = useState('');
	const [plz, setPlz] = useState('');
	const [land, setLand] = useState('');
	const [geburtsdatum, setGeburtsdatum] = useState('');

	useEffect(() => {
		// Setze die Eingabefelder zurück

		setNachname("")
		setVorname("")
		setStrasse("")
		setOrt("")
		setPlz("")
		setLand("")
		setGeburtsdatum("")
		},[])

	const closeModal = () => {
		onClose()
	};

	const handleFormSubmit = () => {

		const customerData:Kunde = {
			nachname,
			vorname,
			strasse,
			ort,
			plz,
			land,
			geburtsdatum,
		};

		console.log(plz)


		// Schließe das Modal
		closeModal();
	};

	return (
		<div>
				<h2>Neuen Kunden anlegen</h2>
				<form onSubmit={handleFormSubmit}>
					<label>
						Nachname:
						<input
							type="text"
							value={nachname}
							onChange={(e) => setNachname(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Vorname:
						<input
							type="text"
							value={vorname}
							onChange={(e) => setVorname(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Straße:
						<input
							type="text"
							value={strasse}
							onChange={(e) => setStrasse(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Ort:
						<input
							type="text"
							value={ort}
							onChange={(e) => setOrt(e.target.value)}
						/>
					</label>
					<br />
					<label>
						PLZ:
						<input
							type="text"
							value={plz}
							onChange={(e) => setPlz(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Land:
						<input
							type="text"
							value={land}
							onChange={(e) => setLand(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Geburtsdatum:
						<input
							type="text"
							value={geburtsdatum}
							onChange={(e) => setGeburtsdatum(e.target.value)}
						/>
					</label>
					<br />
					<button type="submit">Kunde anlegen</button>
					<button type="button" onClick={closeModal}>
						Abbrechen
					</button>
				</form>
		</div>
	);
};
