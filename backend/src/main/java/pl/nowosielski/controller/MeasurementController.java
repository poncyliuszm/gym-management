package pl.nowosielski.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.nowosielski.model.Measurement;
import pl.nowosielski.repository.MeasurementRepository;

import java.util.List;

@RestController
@RequestMapping("/measurement")
public class MeasurementController {

    private MeasurementRepository measurementRepository;

    @Autowired
    public MeasurementController(MeasurementRepository measurementRepository) {
        this.measurementRepository = measurementRepository;
    }

    @GetMapping
    public List<Measurement> list() {
        return this.measurementRepository.findAll();
    }

    @PostMapping
    public void save(@RequestBody Measurement measurement) {
        this.measurementRepository.save(measurement);
    }

    @GetMapping("/{id}")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public Measurement getOne(@PathVariable("id") Integer id) {
        return this.measurementRepository.findById(id).orElse(null);
    }

    @PutMapping
    public void update(@RequestBody Measurement measurement) {
        this.measurementRepository.save(measurement);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        this.measurementRepository.deleteById(id);
    }
}
