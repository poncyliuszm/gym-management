package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.nowosielski.model.Measurement;
import pl.nowosielski.model.MeasurementType;

public interface MeasurementRepository extends JpaRepository<Measurement, Integer> {
}
