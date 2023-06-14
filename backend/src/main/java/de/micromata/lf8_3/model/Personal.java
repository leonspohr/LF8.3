package de.micromata.lf8_3.model;

import jakarta.persistence.*;

@Entity
public class Personal {

    @Id
    @GeneratedValue
    private long id_personal;

    private String ma_nachname;

    private String ma_vorname;

}
