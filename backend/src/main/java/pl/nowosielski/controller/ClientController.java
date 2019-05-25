package pl.nowosielski.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.nowosielski.model.Client;
import pl.nowosielski.repository.ClientRepository;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientController {

    private final ClientRepository clientRepository;

    @Autowired
    public ClientController(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @GetMapping("/list")
    public List<Client> list() {
        return clientRepository.findAll();
    }

    @GetMapping("/getActiveClients")
    public List<Client> getActiveClients() {
        return clientRepository.findByStatus(true);
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public Client getOne(@PathVariable("id") Integer id) {
        return clientRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody Client client) {
        clientRepository.save(client);
    }

    @PutMapping()
    public Client update(@RequestBody Client client) {
        return clientRepository.save(client);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        clientRepository.deleteById(id);
    }
}
