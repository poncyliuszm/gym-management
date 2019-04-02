package pl.nowosielski.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Klient")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_Klient")
    private Integer id;

    @Column(name = "Imie")
    private String name;

    @Column(name = "Nazwisko")
    private String surname;

    @Column(name = "Data_Urodzenia")
    private LocalDate date;

    @Column(name = "Adres")
    private String address;

    @Column(name = "telefon")
    private Integer phone;

    @Column(name = "E_mail")
    private String email;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
