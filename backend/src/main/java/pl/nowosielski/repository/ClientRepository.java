package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.nowosielski.model.Client;

public interface ClientRepository extends JpaRepository<Client, Integer> {
}
