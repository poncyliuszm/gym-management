package pl.nowosielski.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.nowosielski.model.TrainerView;
import pl.nowosielski.repository.TrainerViewRepository;

import java.util.List;

@RestController
@RequestMapping("/trainerView")
public class TrainerViewController {

    @Autowired
    TrainerViewRepository trainerViewRepository;

    @GetMapping
    public List<TrainerView> list() {
        return trainerViewRepository.findAll();
    }

    @GetMapping("/{id}")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public TrainerView getOne(@PathVariable("id") Integer id) {
        return trainerViewRepository.findById(id).orElse(null);
    }

    @PutMapping
    public void update(@RequestBody TrainerView TrainerView) {
        this.trainerViewRepository.save(TrainerView);
    }

    @PostMapping
    public void save(@RequestBody TrainerView TrainerView) {
        this.trainerViewRepository.save(TrainerView);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        this.trainerViewRepository.deleteById(id);
    }
}
