package pl.nowosielski.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.nowosielski.model.Role;
import pl.nowosielski.repository.RoleRepository;

import java.util.List;


@RestController
@RequestMapping("/role")
public class RoleController {

    @Autowired
    private RoleRepository roleRepository;

    @GetMapping("/list")
    public List<Role> list() {
        return roleRepository.findAll();
    }
}
