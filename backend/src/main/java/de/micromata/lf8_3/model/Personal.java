package de.micromata.lf8_3.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Personal {

    @Id
    @GeneratedValue
    private long id_personal;

    private String ma_nachname;

    private String ma_vorname;

}
