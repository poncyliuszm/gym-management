package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.nowosielski.model.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Integer> {

}
