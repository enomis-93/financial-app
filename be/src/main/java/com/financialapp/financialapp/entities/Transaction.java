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


    @ManyToOne
    @JoinColumn(name = "idbank_account")
    private BankAccount bankAccount;


}
