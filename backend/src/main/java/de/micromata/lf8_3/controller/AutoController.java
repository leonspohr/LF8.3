package de.micromata.lf8_3.controller;


import de.micromata.lf8_3.model.Auto;
import de.micromata.lf8_3.repository.AutoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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

    return (List<Auto>)autoRepository.findAll();
  }
  @GetMapping("/getAutoById")
  public Auto getAutoById(@RequestParam Long id) {
    Optional<Auto> auto = autoRepository.findById(id);
    return auto.orElse(null);
  }

  @PostMapping("/saveAuto")
  public void saveAuto(@RequestBody Auto auto) {
    autoRepository.save(auto);
  }

  @DeleteMapping("/deleteAuto")
  public void deleteAuto(@RequestBody Auto auto) {
    autoRepository.delete(auto);
  }

  @PutMapping("/setVerliehen")
  public Auto setVerliehen(@RequestParam Long id) {
    Optional<Auto> autoOptional = autoRepository.findById(id);
    if (autoOptional.orElse(null) != null) {
      Auto auto = autoOptional.get();
      auto.setVerliehen(!auto.getVerliehen());
      autoRepository.save(auto);
      return auto;
    }

    return null;
  }
}

