package pl.nowosielski.model;

import jdk.nashorn.internal.ir.annotations.Immutable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Immutable
@Table(name = "WIDOK_2")
@Entity
public class TrainerView {

    @Id
    @Column(name = "ID")
    private Integer id;

    @Column(name = "Imie_Klienta")
    private String name;

    @Column(name = "Nazwisko_Klienta")
    private String surname;

    @Column(name = "Data_wprowadzenia_wywiadu")
    private LocalDate dateFrom;

    @Column(name = "Opis")
    private String description;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
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
