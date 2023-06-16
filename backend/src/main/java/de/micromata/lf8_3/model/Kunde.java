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
public class Kunde {

    @Id
    @GeneratedValue
    private long kundennummer;

    private String nachname;

    private String vorname;

    private String strasse;

    private String ort;

    private int plz;

    private String land;

    private String geburtsdatum;
}