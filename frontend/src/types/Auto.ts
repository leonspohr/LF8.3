import Preisgruppe from "./Preisgruppe";

export default interface Auto {
  id?: number;
  kennzeichen?: string;
  hersteller?: string;
  typ?: string;
  baujahr?: number;
  ps?: number;
  ccm?: number;
  farbe?: string;
  kraftstoff?: string;
  sitzplaetze?: number;
  extras?: string;
  zubehoer?: string;
  versicherungsNr?: string;
  tuev?: string;
  asu?: string;
  verliehen?: boolean;
  preisgruppe?: Preisgruppe;
}
