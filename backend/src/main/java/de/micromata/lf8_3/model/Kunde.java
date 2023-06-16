package de.micromata.lf8_3.model;

import jakarta.persistence.*;

@Entity
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