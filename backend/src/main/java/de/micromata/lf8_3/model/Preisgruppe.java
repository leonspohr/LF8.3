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
public class Preisgruppe {

    @Id
    @GeneratedValue
    private long id;

    private double preis_kilometer;

    private double preis_tag;

}
