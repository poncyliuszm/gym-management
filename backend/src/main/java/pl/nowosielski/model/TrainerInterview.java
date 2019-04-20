package pl.nowosielski.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Wywiad_Trenera")
public class TrainerInterview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_Wywiad_Trenera")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "Id_Pracownik", insertable = false, updatable = false)
    private Worker worker;

    @Column(name = "Id_Pracownik")
    private Integer workerId;

    @ManyToOne
    @JoinColumn(name = "Id_Bilet", insertable = false, updatable = false)
    private Ticket ticket;

    @Column(name = "Id_Bilet")
    private Integer ticketId;

    @Column(name = "Data_wprowadzenia")
    private LocalDate dateFrom;

    @Column(name = "Opis")
    private String description;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Worker getWorker() {
        return worker;
    }

    public void setWorker(Worker worker) {
        this.worker = worker;
    }

    public Integer getWorkerId() {
        return workerId;
    }

    public void setWorkerId(Integer workerId) {
        this.workerId = workerId;
    }

    public Ticket getTicket() {
        return ticket;
    }

    public void setTicket(Ticket ticket) {
        this.ticket = ticket;
    }

    public Integer getTicketId() {
        return ticketId;
    }

    public void setTicketId(Integer ticketId) {
        this.ticketId = ticketId;
    }

    public LocalDate getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(LocalDate dateFrom) {
        this.dateFrom = dateFrom;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
