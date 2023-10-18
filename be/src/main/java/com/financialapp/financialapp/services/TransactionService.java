package com.financialapp.financialapp.services;

import com.financialapp.financialapp.repositories.BankAccountRepository;
import com.financialapp.financialapp.repositories.TransactionRepository;
import org.springframework.stereotype.Service;

@Service

public class TransactionService {

    private TransactionRepository transactionRepository;
    private BankAccountRepository bankAccountRepository;

    public TransactionService(TransactionRepository transactionRepository, BankAccountRepository bankAccountRepository){
        this.transactionRepository = transactionRepository;
        this.bankAccountRepository = bankAccountRepository;
    }
}
