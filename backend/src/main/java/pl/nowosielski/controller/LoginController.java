package pl.nowosielski.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.nowosielski.model.Worker;
import pl.nowosielski.repository.WorkerRepository;
import pl.nowosielski.service.WorkerService;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;

@RestController
public class LoginController {

    private WorkerRepository workerRepository;
    private WorkerService workerService;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public LoginController(WorkerRepository workerRepository,
                           WorkerService workerService,
                           BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.workerRepository = workerRepository;
        this.workerService = workerService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @GetMapping("/login")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization")
                .substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder()
                .decode(authToken)).split(":")[0];
    }

    @PostMapping("/changePassword")
    public void changePassword(@RequestBody String password) {
        Worker currentUser = this.workerService.getCurrentUser();
        currentUser.setPassword(bCryptPasswordEncoder.encode(password));

        workerRepository.save(currentUser);
    }
}
