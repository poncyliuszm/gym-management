package pl.nowosielski.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "Typ_Oplat")
public class PaymentType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_Typ_Oplat")
    private Integer id;

    @Column(name = "Nazwa")
    private String name;

    @Column(name = "Wartosc")
    private Integer paidPercent;

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

    public Integer getPaidPercent() {
        return paidPercent;
    }

    public void setPaidPercent(Integer paidPercent) {
        this.paidPercent = paidPercent;
    }
}
