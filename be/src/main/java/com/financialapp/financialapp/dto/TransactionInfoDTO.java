package com.financialapp.financialapp.dto;

public class TransactionInfoDTO {
    private Integer balance;
    private Boolean addCash;

    public TransactionInfoDTO() {
    }

    public TransactionInfoDTO(Integer balance, Boolean addCash) {
        this.balance = balance;
        this.addCash = addCash;
    }

    public Integer getBalance() {
        return balance;
    }

    public void setBalance(Integer balance) {
        this.balance = balance;
    }

    public Boolean getAddCash() {
        return addCash;
    }

    public void setAddCash(Boolean addCash) {
        this.addCash = addCash;
    }
}
