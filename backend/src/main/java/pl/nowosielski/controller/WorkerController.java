package pl.nowosielski.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.nowosielski.model.Worker;
import pl.nowosielski.repository.WorkerRepository;
import pl.nowosielski.service.WorkerService;

import java.util.List;

@RestController
@RequestMapping("/worker")
public class WorkerController {

    private final WorkerRepository workerRepository;
    private final WorkerService workerService;

    @Autowired
    public WorkerController(WorkerRepository workerRepository, WorkerService workerService) {
        this.workerRepository = workerRepository;
        this.workerService = workerService;
    }

    @GetMapping("/currentWorker")
    public Worker getCurrentUser() {
        return workerService.getCurrentUser();
    }

    @GetMapping("/list")
    public List<Worker> list() {
        return workerRepository.findAll();
    }

    @GetMapping("/getActiveWorkers")
    public List<Worker> getActiveWorkers() {
        return workerRepository.findByStatus(true);
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public Worker getOne(@PathVariable("id") Integer id) {
        return workerRepository.findById(id).orElse(null);
    }

    @PostMapping()
    public void save(@RequestBody Worker worker) {
        workerService.save(worker);
    }

    @PutMapping()
    public Worker update(@RequestBody Worker worker) {
        return workerService.save(worker);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        workerRepository.deleteById(id);
    }
}
