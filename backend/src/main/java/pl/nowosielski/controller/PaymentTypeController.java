package pl.nowosielski.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.nowosielski.model.PaymentType;
import pl.nowosielski.model.PaymentType;
import pl.nowosielski.repository.PaymentTypeRepository;

import java.util.List;

@RestController
@RequestMapping("/paymentType")
public class PaymentTypeController {

    private PaymentTypeRepository paymentTypeRepository;

    @Autowired
    public PaymentTypeController(PaymentTypeRepository paymentTypeRepository) {
        this.paymentTypeRepository = paymentTypeRepository;
    }

    @GetMapping
    public List<PaymentType> list() {
        return this.paymentTypeRepository.findAll();
    }

    @PostMapping
    public void save(@RequestBody PaymentType paymentType) {
        this.paymentTypeRepository.save(paymentType);
    }

    @GetMapping("/{id}")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public PaymentType getOne(@PathVariable("id") Integer id) {
        return this.paymentTypeRepository.findById(id).orElse(null);
    }

    @PutMapping
    public void update(@RequestBody PaymentType paymentType) {
        this.paymentTypeRepository.save(paymentType);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        this.paymentTypeRepository.deleteById(id);
    }
}
