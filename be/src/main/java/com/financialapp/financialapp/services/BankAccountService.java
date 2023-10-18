package com.financialapp.financialapp.services;

import com.financialapp.financialapp.entities.BankAccount;
import com.financialapp.financialapp.repositories.BankAccountRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankAccountService {

    private BankAccountRepository bankAccountRepository;

    public BankAccountService(BankAccountRepository bankAccountRepository){
        this.bankAccountRepository = bankAccountRepository;
    }

    public BankAccount createNewBankAccount(BankAccount bankAccount){
       return this.bankAccountRepository.save(bankAccount);
    }

    public List<BankAccount> getAllBankAccounts(){
        return  this.bankAccountRepository.findAll();
    }
}
