package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.nowosielski.model.MeasurementType;
import pl.nowosielski.model.TicketType;

public interface MeasurementTypeRepository extends JpaRepository<MeasurementType, Integer> {
}
