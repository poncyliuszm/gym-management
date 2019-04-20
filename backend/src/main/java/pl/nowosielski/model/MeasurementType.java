package pl.nowosielski.model;

import javax.persistence.*;

@Entity
@Table(name = "Slownik_Pomiar")
public class MeasurementType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_Slownik_Pomiar")
    private Integer id;

    @Column(name = "Nazwa")
    private String name;

    @Column(name = "Opis")
    private String description;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
