import "./auto.scss";

export const Auto = (props:any) => {
  console.log(props)
    return (
        <a className="car" href={"/car/" + props.id}>
            <div className="car--text-wrapper">

              <label>{props.id}</label>
              <label>{props.kennzeichen}</label>
              <label>{props.hersteller}</label>
              <label>{props.typ}</label>
              <label>{props.baujahr}</label>
              <label>{props.ps}</label>
              <label>{props.ccm}</label>
              <label>{props.farbe}</label>
              <label>{props.kraftstoff}</label>
              <label>{props.sitzplaetze}</label>
              <label>{props.extras}</label>
              <label>{props.zubehoer}</label>
              <label>{props.versicherungsNr}</label>
              <label>{props.tuev}</label>
              <label>{props.asu}</label>
              <label>{props.verliehen}</label>

            </div>
        </a>
    );
};
