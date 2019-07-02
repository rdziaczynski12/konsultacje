package com.example.backend.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class Consultation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private Date date;

    @NotBlank
    @Size(min=3, max=200)
    private String title;

    @NotBlank
    @Size(min=3)
    private String description;

    private boolean active;

    private boolean isDefault;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "consultation_subject",
            joinColumns = @JoinColumn(name = "consultation_id"),
            inverseJoinColumns = @JoinColumn(name = "subject_id"))
    private Set<Subject> subjects = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;

    public Consultation() {
    }

    public Consultation(@NotBlank Date date, @NotBlank @Size(min = 3, max = 200) String title, @NotBlank @Size(min = 3) String description, boolean active, boolean isDefault, Set<Subject> subjects, User user) {
        this.date = date;
        this.title = title;
        this.description = description;
        this.active = active;
        this.isDefault = isDefault;
        this.subjects = subjects;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public boolean isDefault() {
        return isDefault;
    }

    public void setDefault(boolean aDefault) {
        isDefault = aDefault;
    }

    public Set<Subject> getSubjects() {
        return subjects;
    }

    public void setSubjects(Set<Subject> subjects) {
        this.subjects = subjects;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
