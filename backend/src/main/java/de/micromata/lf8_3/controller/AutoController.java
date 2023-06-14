package de.micromata.lf8_3.controller;


import de.micromata.lf8_3.model.Auto;
import de.micromata.lf8_3.repository.AutoRepository;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.micromata.lf8_3.repository.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AutoController {
  private final AutoRepository autoRepository;

  public AutoController(AutoRepository autoRepository) {
    this.autoRepository = autoRepository;
  }

  @GetMapping("/getAllAutos")
  public List<Auto> getAllAutos() {
    return (List<Auto>) autoRepository.findAll();
  }

  @PostMapping("/saveAuto")
  public void saveAuto(@RequestBody Auto auto) {
    autoRepository.save(auto);
  }

  @DeleteMapping("/deleteAuto")
  public void deleteAuto(@RequestBody Auto auto) {
    autoRepository.delete(auto);
  }

  @PutMapping("/changeAuto")
  public Auto getAllAutos(@RequestBody Auto updatedAuto) {
    Auto auto = autoRepository.findById(updatedAuto.getId()).get();

    auto.setKennzeichen(updatedAuto.getKennzeichen());
    auto.setHersteller(updatedAuto.getHersteller());
    auto.setTyp(updatedAuto.getTyp());
    auto.setBaujahr(updatedAuto.getBaujahr());
    auto.setPs(updatedAuto.getPs());
    auto.setCcm(updatedAuto.getCcm());
    auto.setFarbe(updatedAuto.getFarbe());
    auto.setKraftstoff(updatedAuto.getKraftstoff());
    auto.setSitzplaetze(updatedAuto.getSitzplaetze());
    auto.setExtras(updatedAuto.getExtras());
    auto.setZubehoer(updatedAuto.getZubehoer());
    auto.setVersicherungsNr(updatedAuto.getVersicherungsNr());
    auto.setTuev(updatedAuto.getTuev());
    auto.setAsu(updatedAuto.getAsu());
    auto.setVerliehen(updatedAuto.getVerliehen());
    auto.setPreisgruppe_id(updatedAuto.getPreisgruppe_id());

    autoRepository.save(auto);
    return auto;
  }
}

