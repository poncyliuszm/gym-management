package pl.nowosielski.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pl.nowosielski.model.CustomUserDetails;
import pl.nowosielski.model.Worker;
import pl.nowosielski.repository.WorkerRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private WorkerRepository workerRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Worker worker = workerRepository.findByName(username);
        if (worker == null)
            throw new UsernameNotFoundException((username));
        return new CustomUserDetails(worker);
    }


}
