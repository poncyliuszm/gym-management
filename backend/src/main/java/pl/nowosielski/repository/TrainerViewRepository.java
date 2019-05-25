package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.nowosielski.model.TrainerView;

@Repository
public interface TrainerViewRepository extends JpaRepository<TrainerView, Integer> {

}
