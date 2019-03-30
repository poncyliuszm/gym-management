package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.nowosielski.model.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer> {

}
