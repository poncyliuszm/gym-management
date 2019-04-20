package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.nowosielski.model.Ticket;
import pl.nowosielski.model.TrainerInterview;

@Repository
public interface TrainerInterviewRepository extends JpaRepository<TrainerInterview, Integer> {

}
