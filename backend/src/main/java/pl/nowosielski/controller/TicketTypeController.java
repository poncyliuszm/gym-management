package pl.nowosielski.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.nowosielski.model.TicketType;
import pl.nowosielski.repository.TicketTypeRepository;

import java.util.List;

@RestController
@RequestMapping("/ticketType")
public class TicketTypeController {

    private TicketTypeRepository ticketTypeRepository;

    @Autowired
    public TicketTypeController(TicketTypeRepository ticketTypeRepository) {
        this.ticketTypeRepository = ticketTypeRepository;
    }

    @GetMapping
    public List<TicketType> list() {
        return this.ticketTypeRepository.findAll();
    }

    @PostMapping
    public void save(@RequestBody TicketType ticketType) {
        this.ticketTypeRepository.save(ticketType);
    }

    @GetMapping("/{id}")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public TicketType getOne(@PathVariable("id") Integer id) {
        return this.ticketTypeRepository.findById(id).orElse(null);
    }

    @PutMapping
    public void update(@RequestBody TicketType ticketType) {
        this.ticketTypeRepository.save(ticketType);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        this.ticketTypeRepository.deleteById(id);
    }
}
