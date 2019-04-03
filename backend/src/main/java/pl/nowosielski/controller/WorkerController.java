package pl.nowosielski.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.nowosielski.model.Worker;
import pl.nowosielski.repository.WorkerRepository;

import java.util.List;

@RestController
@RequestMapping("/worker")
public class WorkerController {

    private final WorkerRepository workerRepository;

    @Autowired
    public WorkerController(WorkerRepository workerRepository) {
        this.workerRepository = workerRepository;
    }

    @GetMapping("/list")
    public List<Worker> list() {
        return workerRepository.findAll();
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public Worker getOne(@PathVariable("id") Integer id) {
        return workerRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody Worker worker) {
        workerRepository.save(worker);
    }

    @PutMapping()
    public Worker update(@RequestBody Worker worker) {
        return workerRepository.save(worker);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        workerRepository.deleteById(id);
    }
}
