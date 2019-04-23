package pl.nowosielski.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.nowosielski.model.Exercise;
import pl.nowosielski.repository.ExerciseRepository;

import java.util.List;

@RestController
@RequestMapping("/exercise")
public class ExerciseController {

    private ExerciseRepository exerciseRepository;

    @Autowired
    public ExerciseController(ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }

    @GetMapping
    public List<Exercise> list() {
        return this.exerciseRepository.findAll();
    }

    @PostMapping
    public void save(@RequestBody Exercise exercise) {
        this.exerciseRepository.save(exercise);
    }

    @GetMapping("/{id}")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public Exercise getOne(@PathVariable("id") Integer id) {
        return this.exerciseRepository.findById(id).orElse(null);
    }

    @PutMapping
    public void update(@RequestBody Exercise exercise) {
        this.exerciseRepository.save(exercise);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        this.exerciseRepository.deleteById(id);
    }
}
