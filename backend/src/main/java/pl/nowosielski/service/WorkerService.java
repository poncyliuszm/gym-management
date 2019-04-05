package pl.nowosielski.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.nowosielski.model.Worker;
import pl.nowosielski.repository.WorkerRepository;

@Service
public class WorkerService {

    @Autowired
    private WorkerRepository workerRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public Worker save(Worker worker) {
        worker.setPassword(worker.getPassword() != null ? bCryptPasswordEncoder.encode(worker.getPassword()) : workerRepository.findById(worker.getId()).get().getPassword());

        return workerRepository.save(worker);
    }
}
