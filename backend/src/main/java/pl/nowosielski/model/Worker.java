package pl.nowosielski.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Pracownik")
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_Pracownik")
    private Integer id;

    @Column(name = "Loginn")
    private String login;

    @Column(name = "Haslo")
    private String password;

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

    @Column(name = "Id_Specjalizacja")
    private Integer roleId;

    @ManyToOne
    @JoinColumn(name = "Id_Specjalizacja", insertable = false, updatable = false)
    private Role role;

    public Worker() {
    }

    public Worker(Worker worker) {
        this.id = worker.id;
        this.login = worker.login;
        this.password = worker.password;
        this.name = worker.name;
        this.surname = worker.surname;
        this.date = worker.date;
        this.address = worker.address;
        this.phone = worker.phone;
        this.email = worker.email;
        this.roleId = worker.roleId;
        this.role = worker.role;
    }

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

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
