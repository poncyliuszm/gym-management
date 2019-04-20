package pl.nowosielski.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.nowosielski.model.TrainerInterview;
import pl.nowosielski.repository.TrainerInterviewRepository;

import java.util.List;

@RestController
@RequestMapping("/trainerInterview")
public class TrainerInterviewController {

    @Autowired
    TrainerInterviewRepository trainerInterviewRepository;

    @GetMapping
    public List<TrainerInterview> list() {
        return trainerInterviewRepository.findAll();
    }

    @GetMapping("/{id}")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public TrainerInterview getOne(@PathVariable("id") Integer id) {
        return trainerInterviewRepository.findById(id).orElse(null);
    }

    @PutMapping
    public void update(@RequestBody TrainerInterview trainerInterview) {
        this.trainerInterviewRepository.save(trainerInterview);
    }

    @PostMapping
    public void save(@RequestBody TrainerInterview trainerInterview) {
        this.trainerInterviewRepository.save(trainerInterview);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        this.trainerInterviewRepository.deleteById(id);
    }
}
