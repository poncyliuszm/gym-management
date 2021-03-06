package pl.nowosielski.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.nowosielski.model.TrainerView;
import pl.nowosielski.repository.TrainerViewRepository;

import java.util.List;

@RestController
@RequestMapping("/trainerView")
public class TrainerViewController {

    @Autowired
    TrainerViewRepository trainerViewRepository;

    @GetMapping
    public List<TrainerView> list() {
        return trainerViewRepository.findAll();
    }


}
