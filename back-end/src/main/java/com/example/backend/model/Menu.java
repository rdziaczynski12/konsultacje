package com.example.backend.model;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date startSate;

    private Date finishDate;

    private Date deliveryTime;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "menu_dish",
            joinColumns = @JoinColumn(name = "id_menu"),
            inverseJoinColumns = @JoinColumn(name = "id_dish"))
    private Set<Dish> dishes;

    public Menu() {
    }

    public Menu(Date startSate, Date finishDate, Date deliveryTime, Set<Dish> dishes) {
        this.startSate = startSate;
        this.finishDate = finishDate;
        this.deliveryTime = deliveryTime;
        this.dishes = dishes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getStartSate() {
        return startSate;
    }

    public void setStartSate(Date startSate) {
        this.startSate = startSate;
    }

    public Date getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(Date finishDate) {
        this.finishDate = finishDate;
    }

    public Date getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(Date deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public Set<Dish> getDishes() {
        return dishes;
    }

    public void setDishes(Set<Dish> dishes) {
        this.dishes = dishes;
    }
}
