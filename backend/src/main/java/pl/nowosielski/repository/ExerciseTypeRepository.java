package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.nowosielski.model.ExerciseType;

import java.util.List;

public interface ExerciseTypeRepository extends JpaRepository<ExerciseType, Integer> {
    List<ExerciseType> findByStatus(boolean b);
}
