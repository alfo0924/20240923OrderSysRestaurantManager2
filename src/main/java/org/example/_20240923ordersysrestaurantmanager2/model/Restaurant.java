package org.example._20240923ordersysrestaurantmanager2.model;


import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "restaurants")
public class Restaurant {

    // Getters and setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String address;

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}