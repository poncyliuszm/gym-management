package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.nowosielski.model.TicketType;

public interface TicketTypeRepository extends JpaRepository<TicketType, Integer> {
}
