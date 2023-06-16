package de.micromata.lf8_3.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Veleih {

    @Id
    @GeneratedValue
    private long id_auto;

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

    private String versicherungs_nr;

    private String tuev;

    private String asu;

    private Boolean verliehen;

    @ManyToOne
    @JoinColumn(name = "preisgruppe_fk")
    private Preisgruppe preisgruppe_id;

}
