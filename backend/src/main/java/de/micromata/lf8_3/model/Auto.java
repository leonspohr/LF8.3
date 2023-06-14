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

    @ManyToOne
    @JoinColumn(name = "preisgruppe_fk")
    private Preisgruppe preisgruppe_id;

    public Auto(int i, String kennzeichen, String hersteller, String typ, int i1, int i2, int i3, String farbe, String kraftstoff, int i4, String extras, String zubehoer, String versicherungsNr, String tuev, String tuev1, boolean b) {
    }
}
