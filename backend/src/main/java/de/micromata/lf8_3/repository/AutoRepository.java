package de.micromata.lf8_3.repository;

import de.micromata.lf8_3.model.*;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.*;

public interface AutoRepository extends CrudRepository<Auto, Long> {
  List<Auto> findByKennzeichenLikeIgnoreCase(String searchValue);
  List<Auto> findByHerstellerLikeIgnoreCase(String searchValue);
  List<Auto> findByTypLikeIgnoreCase(String searchValue);
  List<Auto> findByFarbeLikeIgnoreCase(String searchValue);
  List<Auto> findByExtrasLikeIgnoreCase(String searchValue);
  List<Auto> findByZubehoerLikeIgnoreCase(String searchValue);

  Optional<Auto> findByBaujahr(int searchValue);
  Optional<Auto> findByPs(int searchValue);
  Optional<Auto> findByCcm(int searchValue);
  Optional<Auto> findByKraftstoff(String searchValue);
  Optional<Auto> findBySitzplaetze(int searchValue);
  Optional<Auto> findByVersicherungsNr(String searchValue);
  Optional<Auto> findByTuev(String searchValue);
  Optional<Auto> findByAsu(String searchValue);
}
