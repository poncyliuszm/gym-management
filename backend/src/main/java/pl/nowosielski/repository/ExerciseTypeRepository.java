package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.nowosielski.model.ExerciseType;

public interface ExerciseTypeRepository extends JpaRepository<ExerciseType, Integer> {
}
