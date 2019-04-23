package pl.nowosielski.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Cwiczenie")
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_Cwiczenie")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "Id_Slownik_Cwiczenie", insertable = false, updatable = false)
    private ExerciseType exerciseType;

    @Column(name = "Id_Slownik_Cwiczenie")
    private Integer exerciseTypeId;

    @ManyToOne
    @JoinColumn(name = "Id_Bilet", insertable = false, updatable = false)
    private Ticket ticket;

    @Column(name = "Id_Bilet")
    private Integer ticketId;

    @Column(name = "Data_wprowadzenia")
    private LocalDate dateFrom;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public ExerciseType getExerciseType() {
        return exerciseType;
    }

    public void setExerciseType(ExerciseType exerciseType) {
        this.exerciseType = exerciseType;
    }

    public Integer getExerciseTypeId() {
        return exerciseTypeId;
    }

    public void setExerciseTypeId(Integer exerciseTypeId) {
        this.exerciseTypeId = exerciseTypeId;
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
}
