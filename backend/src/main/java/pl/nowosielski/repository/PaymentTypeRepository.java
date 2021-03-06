package pl.nowosielski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.nowosielski.model.PaymentType;
import pl.nowosielski.model.TicketType;

public interface PaymentTypeRepository extends JpaRepository<PaymentType, Integer> {
}
