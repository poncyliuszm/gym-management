package pl.nowosielski.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.nowosielski.model.MeasurementType;
import pl.nowosielski.repository.MeasurementTypeRepository;

import java.util.List;

@RestController
@RequestMapping("/measurementType")
public class MeasurementTypeController {

    private MeasurementTypeRepository measurementTypeRepository;

    @Autowired
    public MeasurementTypeController(MeasurementTypeRepository measurementTypeRepository) {
        this.measurementTypeRepository = measurementTypeRepository;
    }

    @GetMapping
    public List<MeasurementType> list() {
        return this.measurementTypeRepository.findAll();
    }

    @PostMapping
    public void save(@RequestBody MeasurementType measurementType) {
        this.measurementTypeRepository.save(measurementType);
    }

    @GetMapping("/{id}")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public MeasurementType getOne(@PathVariable("id") Integer id) {
        return this.measurementTypeRepository.findById(id).orElse(null);
    }

    @PutMapping
    public void update(@RequestBody MeasurementType measurementType) {
        this.measurementTypeRepository.save(measurementType);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        this.measurementTypeRepository.deleteById(id);
    }
}
