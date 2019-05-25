package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.nowosielski.model.Client;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {
    List<Client> findByStatus(Boolean b);

    Client findByName(String name);

}
