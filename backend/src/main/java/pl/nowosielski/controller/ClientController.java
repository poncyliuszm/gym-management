package pl.nowosielski.controller;

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

    @PostMapping("/save")
    public void save(@RequestBody Client client) {
        clientRepository.save(client);
    }
}
