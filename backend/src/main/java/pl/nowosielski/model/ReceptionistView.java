package pl.nowosielski.model;

import jdk.nashorn.internal.ir.annotations.Immutable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalTime;

@Immutable
@Table(name = "WIDOK_1")
@Entity
public class ReceptionistView {

    @Id
    @Column(name = "ID")
    private Integer id;

    @Column(name = "Imie_Klienta")
    private String clientName;

    @Column(name = "Nazwisko_Klienta")
    private String clientSurname;

    @Column(name = "Imie_Pracownika")
    private String workerName;

    @Column(name = "Nazwisko_Pracownika")
    private String workerSurname;

    @Column(name = "Godzina_rozpoczęcia_treningu")
    private LocalTime timeFrom;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getClientSurname() {
        return clientSurname;
    }

    public void setClientSurname(String clientSurname) {
        this.clientSurname = clientSurname;
    }

    public String getWorkerName() {
        return workerName;
    }

    public void setWorkerName(String workerName) {
        this.workerName = workerName;
    }

    public String getWorkerSurname() {
        return workerSurname;
    }

    public void setWorkerSurname(String workerSurname) {
        this.workerSurname = workerSurname;
    }

    public LocalTime getTimeFrom() {
        return timeFrom;
    }

    public void setTimeFrom(LocalTime timeFrom) {
        this.timeFrom = timeFrom;
    }
}
