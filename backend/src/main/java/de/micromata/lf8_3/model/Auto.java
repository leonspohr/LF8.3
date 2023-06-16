package de.micromata.lf8_3.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Auto {

    @Id
    @GeneratedValue
    private long id;

    private String kennzeichen;

    private String hersteller;

    private String typ;

    private int baujahr;

    private int ps;

    private int ccm;

    private String farbe;

    private String kraftstoff;

    private int sitzplaetze;

    private String extras;

    private String zubehoer;

    private String versicherungsNr;

    private String tuev;

    private String asu;

    private Boolean verliehen;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "preisgruppe_fk")
    private Preisgruppe preisgruppe;

    public Auto(Auto auto) {
        this.kennzeichen = auto.kennzeichen;
        this.hersteller = auto.hersteller;
        this.typ = auto.typ;
        this.baujahr = auto.baujahr;
        this.ps = auto.ps;
        this.ccm = auto.ccm;
        this.farbe = auto.farbe;
        this.kraftstoff = auto.kraftstoff;
        this.sitzplaetze = auto.sitzplaetze;
        this.extras = auto.extras;
        this.zubehoer = auto.zubehoer;
        this.versicherungsNr = auto.versicherungsNr;
        this.tuev = auto.tuev;
        this.asu = auto.asu;
        this.verliehen = false;
    }

}
