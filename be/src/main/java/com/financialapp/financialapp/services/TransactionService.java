package com.financialapp.financialapp.services;

import com.financialapp.financialapp.entities.Transaction;
import com.financialapp.financialapp.repositories.BankAccountRepository;
import com.financialapp.financialapp.repositories.TransactionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class TransactionService {

    private TransactionRepository transactionRepository;
    private BankAccountRepository bankAccountRepository;

    public TransactionService(TransactionRepository transactionRepository, BankAccountRepository bankAccountRepository){
        this.transactionRepository = transactionRepository;
        this.bankAccountRepository = bankAccountRepository;
    }

    public Integer getTotalAmountForMonth(Long bankAccountID,Integer month){

        Optional<List<Transaction>> transactions= transactionRepository.getAllByIdAndDate(month, bankAccountID);
        Integer sum = 0;
        if(transactions.isPresent()) {
            List<Transaction> transactionList = transactions.get();
            for (Transaction transaction : transactionList) {
                if (transaction.getType().equals("add")) {
                    sum += transaction.getAmount();
                } else {
                    sum -= transaction.getAmount();
                }
            }
        }


        return sum;

    }
}
