package com.financialapp.financialapp.entities;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Date;

@Entity
public class Transaction implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_transaction", nullable = false)
    private Long id;



    @Column(name="date")
    private Date date;

    @Column(name="type")
    private String type;
    @Column(name="amount")
    private Integer amount;

    @ManyToOne
    @JoinColumn(name = "idbank_account")
    private BankAccount bankAccount;

    public Transaction() {
    }

    public Transaction(Date date, String type, Integer amount, BankAccount bankAccount) {
        this.date = date;
        this.type = type;
        this.amount = amount;
        this.bankAccount = bankAccount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public BankAccount getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(BankAccount bankAccount) {
        this.bankAccount = bankAccount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }
}
