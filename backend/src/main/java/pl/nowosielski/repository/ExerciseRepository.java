package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.nowosielski.model.Exercise;
import pl.nowosielski.model.ExerciseType;

public interface ExerciseRepository extends JpaRepository<Exercise, Integer> {
}
