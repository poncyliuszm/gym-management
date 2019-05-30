package pl.nowosielski.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.nowosielski.model.ReceptionistView;
import pl.nowosielski.repository.ReceptionistViewRepository;

import java.util.List;

@RestController
@RequestMapping("/receptionistView")
public class ReceptionistViewController {

    @Autowired
    ReceptionistViewRepository receptionistViewRepository;

    @GetMapping
    public List<ReceptionistView> list() {
        return receptionistViewRepository.findAll();
    }
}
