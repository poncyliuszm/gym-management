package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.nowosielski.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {
}
