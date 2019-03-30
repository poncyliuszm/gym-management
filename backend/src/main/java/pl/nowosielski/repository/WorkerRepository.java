package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.nowosielski.model.Worker;

public interface WorkerRepository extends JpaRepository<Worker, Integer> {

    Worker findByLogin(String username);

    Worker findByName(String username);
}
