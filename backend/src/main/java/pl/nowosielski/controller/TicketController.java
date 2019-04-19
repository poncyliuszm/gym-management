package pl.nowosielski.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.nowosielski.model.Ticket;
import pl.nowosielski.repository.TicketRepository;

import java.util.List;

@RestController
@RequestMapping("/ticket")
public class TicketController {

    @Autowired
    TicketRepository ticketRepository;

    @GetMapping
    public List<Ticket> list() {
        return ticketRepository.findAll();
    }

    @GetMapping("/{id}")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public Ticket getOne(@PathVariable("id") Integer id) {
        return ticketRepository.findById(id).orElse(null);
    }

    @PutMapping
    public void update(@RequestBody Ticket ticket) {
        this.ticketRepository.save(ticket);
    }

    @PostMapping
    public void save(@RequestBody Ticket ticket) {
        this.ticketRepository.save(ticket);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        this.ticketRepository.deleteById(id);
    }
}
