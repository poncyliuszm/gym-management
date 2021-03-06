package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.nowosielski.model.Ticket;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer> {

    List<Ticket> findByClient_status(Boolean status);

    List<Ticket> findByClient_statusAndWorker_status(Boolean clientStatus, Boolean workerStatus);
}
