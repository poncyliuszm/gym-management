package pl.nowosielski.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.nowosielski.model.ExerciseType;
import pl.nowosielski.repository.ExerciseTypeRepository;

import java.util.List;

@RestController
@RequestMapping("/exerciseType")
public class ExerciseTypeController {

    private ExerciseTypeRepository exerciseTypeRepository;

    @Autowired
    public ExerciseTypeController(ExerciseTypeRepository exerciseTypeRepository) {
        this.exerciseTypeRepository = exerciseTypeRepository;
    }

    @GetMapping
    public List<ExerciseType> list() {
        return this.exerciseTypeRepository.findAll();
    }

    @GetMapping("/getActiveExerciseTypes")
    public List<ExerciseType> getActiveExerciseTypes() {
        return this.exerciseTypeRepository.findByStatus(true);
    }

    @PostMapping
    public void save(@RequestBody ExerciseType exerciseType) {
        this.exerciseTypeRepository.save(exerciseType);
    }

    @GetMapping("/{id}")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public ExerciseType getOne(@PathVariable("id") Integer id) {
        return this.exerciseTypeRepository.findById(id).orElse(null);
    }

    @PutMapping
    public void update(@RequestBody ExerciseType exerciseType) {
        this.exerciseTypeRepository.save(exerciseType);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        this.exerciseTypeRepository.deleteById(id);
    }
}
