package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.nowosielski.model.ReceptionistView;

@Repository
public interface ReceptionistViewRepository extends JpaRepository<ReceptionistView, Integer> {

}
