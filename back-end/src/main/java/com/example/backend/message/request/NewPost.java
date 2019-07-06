package com.example.backend.message.request;

import java.util.Date;

public class NewPost {

    private String autor;

    private Date date;

    private String title;

    private String description;

    private Number[] subject;

    private Number[] type;

    public NewPost() {
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
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

    public Number[] getSubject() {
        return subject;
    }

    public void setSubject(Number[] subject) {
        this.subject = subject;
    }

    public Number[] getType() {
        return type;
    }

    public void setType(Number[] type) {
        this.type = type;
    }
}
