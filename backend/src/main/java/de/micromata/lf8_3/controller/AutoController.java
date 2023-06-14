package de.micromata.lf8_3.controller;


import de.micromata.lf8_3.model.Auto;
import java.util.ArrayList;
import java.util.List;

import de.micromata.lf8_3.repository.*;
import org.springframework.web.bind.annotation.*;

@RestController
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

  @PostMapping("/saveAuto")
  public void addAuto(@RequestBody Auto auto) {

  }
}

