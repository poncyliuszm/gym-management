package pl.nowosielski.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "Bilet")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_Bilet")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "Id_Klient", insertable = false, updatable = false)
    private Client client;

    @Column(name = "Id_Klient")
    private Integer clientId;

    @ManyToOne
    @JoinColumn(name = "Id_Typ_Oplat", insertable = false, updatable = false)
    private PaymentType paymentType;

    @Column(name = "Id_Typ_Oplat")
    private Integer paymentTypeId;

    @ManyToOne
    @JoinColumn(name = "Id_Typ_Biletu", insertable = false, updatable = false)
    private TicketType ticketType;

    @Column(name = "Id_Typ_Biletu")
    private Integer ticketTypeId;

    @ManyToOne
    @JoinColumn(name = "Id_Pracownik", insertable = false, updatable = false)
    private Worker worker;

    @Column(name = "Id_Pracownik")
    private Integer workerId;

    @Column(name = "Data_Wprowadznia")
    private LocalDate dateFrom;

    @Column(name = "Godz_Rozpoczecia")
    private LocalTime timeFrom;

    @Column(name = "Godz_Zakoniczenia")
    private LocalTime timeTo;

    @Column(name = "Data_do")
    private LocalDate dateTo;

    @Column(name = "Cena_Koncowa")
    private BigDecimal price;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public PaymentType getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(PaymentType paymentType) {
        this.paymentType = paymentType;
    }

    public TicketType getTicketType() {
        return ticketType;
    }

    public void setTicketType(TicketType ticketType) {
        this.ticketType = ticketType;
    }

    public Integer getWorkerId() {
        return workerId;
    }

    public void setWorkerId(Integer workerId) {
        this.workerId = workerId;
    }

    public Worker getWorker() {
        return worker;
    }

    public void setWorker(Worker worker) {
        this.worker = worker;
    }

    public LocalDate getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(LocalDate dateFrom) {
        this.dateFrom = dateFrom;
    }

    public LocalTime getTimeFrom() {
        return timeFrom;
    }

    public void setTimeFrom(LocalTime timeFrom) {
        this.timeFrom = timeFrom;
    }

    public LocalTime getTimeTo() {
        return timeTo;
    }

    public void setTimeTo(LocalTime timeTo) {
        this.timeTo = timeTo;
    }

    public LocalDate getDateTo() {
        return dateTo;
    }

    public void setDateTo(LocalDate dateTo) {
        this.dateTo = dateTo;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getClientId() {
        return clientId;
    }

    public void setClientId(Integer clientId) {
        this.clientId = clientId;
    }

    public Integer getPaymentTypeId() {
        return paymentTypeId;
    }

    public void setPaymentTypeId(Integer paymentTypeId) {
        this.paymentTypeId = paymentTypeId;
    }

    public Integer getTicketTypeId() {
        return ticketTypeId;
    }

    public void setTicketTypeId(Integer ticketTypeId) {
        this.ticketTypeId = ticketTypeId;
    }
}
