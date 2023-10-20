package com.financialapp.financialapp.entities;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity(name="bank_account")
public class BankAccount implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idbank_account", nullable = false)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="color")
    private String color;

    @Column(name="type")
    private String type;

    @Column(name="balance")
    private Integer balance;

    @Column(name="currency")
    private String currency;

    public BankAccount() {
    }

    public BankAccount(Long id, String name, String color, String type, Integer balance, String currency) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.type = type;
        this.balance = balance;
        this.currency = currency;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getBalance() {
        return balance;
    }

    public void setBalance(Integer balance) {
        this.balance = balance;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }
}
