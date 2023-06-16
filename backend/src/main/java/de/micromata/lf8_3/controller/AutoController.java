package de.micromata.lf8_3.controller;


import de.micromata.lf8_3.model.Auto;
import de.micromata.lf8_3.model.SearchRequestBody;
import de.micromata.lf8_3.repository.AutoRepository;
import java.util.ArrayList;
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

  @PutMapping("/getAutosBySearch")
  public List<Auto> getAutosBySearch(
      @RequestBody SearchRequestBody searchRequestBody
  ) {
    String searchValue = searchRequestBody.searchValue;

    // return all autos, if search is blank
    if (searchValue.isBlank()) {
      return (List<Auto>) autoRepository.findAll();
    }

    List<Auto> autos = new ArrayList<>();
    switch (searchRequestBody.selectedParameter) {
      case "id":
        autoRepository.findById(Long.valueOf(searchValue))
            .ifPresent(autos::add);
        break;
      case "baujahr":
        autoRepository.findByBaujahr(Integer.valueOf(searchValue))
            .ifPresent(autos::add);
        break;
      case "ps":
        autoRepository.findByPs(Integer.valueOf(searchValue))
            .ifPresent(autos::add);
        break;
      case "ccm":
        autoRepository.findByCcm(Integer.valueOf(searchValue))
            .ifPresent(autos::add);
        break;
      case "kraftstoff":
        autoRepository.findByKraftstoff(searchValue)
            .ifPresent(autos::add);
        break;
      case "sitzplaetze":
        autoRepository.findBySitzplaetze(Integer.valueOf(searchValue))
            .ifPresent(autos::add);
        break;
      case "versicherungsNr":
        autoRepository.findByVersicherungsNr(searchValue)
            .ifPresent(autos::add);
        break;
      case "tuev":
        autoRepository.findByTuev(searchValue)
            .ifPresent(autos::add);
        break;
      case "asu":
        autoRepository.findByAsu(searchValue)
            .ifPresent(autos::add);
        break;
      case "extras":
        autos.addAll(autoRepository.findByExtrasLikeIgnoreCase("%" + searchValue + "%"));
        break;
      case "zubehoer":
        autos.addAll(autoRepository.findByZubehoerLikeIgnoreCase("%" + searchValue + "%"));
        break;
      case "kennzeichen":
        autos.addAll(autoRepository.findByKennzeichenLikeIgnoreCase("%" + searchValue + "%"));
        break;
      case "hersteller":
        autos.addAll(autoRepository.findByHerstellerLikeIgnoreCase("%" + searchValue + "%"));
        break;
      case "typ":
        autos.addAll(autoRepository.findByTypLikeIgnoreCase("%" + searchValue + "%"));
        break;
      case "farbe":
        autos.addAll(autoRepository.findByFarbeLikeIgnoreCase("%" + searchValue + "%"));
        break;
      default:
        // Handle invalid attribute case
        break;
    }

    return autos;
  }

  @GetMapping("/getAutoById")
  public Auto getAutoById(@RequestParam Long id) {
    Optional<Auto> auto = autoRepository.findById(id);
    return auto.orElse(null);
  }

  @PostMapping("/saveAuto")
  public void saveAuto(@RequestBody Auto auto) {
    Auto newAuto = new Auto(auto);
    autoRepository.save(newAuto);
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

