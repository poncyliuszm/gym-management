package pl.nowosielski.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Pomiar")
public class Measurement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_Pomiar")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "Id_Slownik_Pomiar", insertable = false, updatable = false)
    private MeasurementType measurementType;

    @Column(name = "Id_Slownik_Pomiar")
    private Integer measurementTypeId;

    @ManyToOne
    @JoinColumn(name = "Id_Bilet", insertable = false, updatable = false)
    private Ticket ticket;

    @Column(name = "Id_Bilet")
    private Integer ticketId;

    @Column(name = "Data_wprowadzenia")
    private LocalDate dateFrom;

    @Column(name = "Rozmiar_CM_KG")
    private Integer measurement;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public MeasurementType getMeasurementType() {
        return measurementType;
    }

    public void setMeasurementType(MeasurementType measurementType) {
        this.measurementType = measurementType;
    }

    public Integer getMeasurementTypeId() {
        return measurementTypeId;
    }

    public void setMeasurementTypeId(Integer measurementTypeId) {
        this.measurementTypeId = measurementTypeId;
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

    public Integer getMeasurement() {
        return measurement;
    }

    public void setMeasurement(Integer measurement) {
        this.measurement = measurement;
    }
}
