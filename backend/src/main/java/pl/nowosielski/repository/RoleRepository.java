package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.nowosielski.model.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {

}
