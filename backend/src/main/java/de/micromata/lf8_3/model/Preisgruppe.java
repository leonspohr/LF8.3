package de.micromata.lf8_3.model;

import jakarta.persistence.*;

@Entity
public class Preisgruppe {

    @Id
    @GeneratedValue
    private long preisgruppe_id;

    private String preis_kilometer;

    private String preis_tag;
}
