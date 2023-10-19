package com.financialapp.financialapp.services;

import com.financialapp.financialapp.dto.TransactionInfoDTO;
import com.financialapp.financialapp.entities.BankAccount;
import com.financialapp.financialapp.entities.Transaction;
import com.financialapp.financialapp.repositories.BankAccountRepository;
import com.financialapp.financialapp.repositories.TransactionRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BankAccountService {

    private BankAccountRepository bankAccountRepository;
    private TransactionRepository transactionRepository;

    public BankAccountService(BankAccountRepository bankAccountRepository, TransactionRepository transactionRepository){
        this.bankAccountRepository = bankAccountRepository;
        this.transactionRepository = transactionRepository;
    }

    public BankAccount createNewBankAccount(BankAccount bankAccount){
       return this.bankAccountRepository.save(bankAccount);
    }

    public List<BankAccount> getAllBankAccounts(){
        return  this.bankAccountRepository.findAll();
    }

    public BankAccount updateBankAccountBalance(Long bankAccountID, TransactionInfoDTO transactionInfoDTO) throws ParseException {
        // Updating balance
        Optional<BankAccount> bankAccountToUpdate = this.bankAccountRepository.findById(bankAccountID);
        if (bankAccountToUpdate.isEmpty() && transactionInfoDTO == null){
            return null;
        }

        Integer currentBalance = bankAccountToUpdate.get().getBalance();

        // Add cash
        if (transactionInfoDTO.getAddCash()){
            bankAccountToUpdate.get().setBalance(currentBalance + transactionInfoDTO.getBalance());
        } else{
            bankAccountToUpdate.get().setBalance(currentBalance - transactionInfoDTO.getBalance());
        }


        // Register transaction
        String pattern = "MM-dd-yyyy hh:ss";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        String formattedDate = simpleDateFormat.format(new Date());

        Transaction transaction = new Transaction(simpleDateFormat.parse(formattedDate), bankAccountToUpdate.get());

        this.transactionRepository.save(transaction);

        return this.bankAccountRepository.save(bankAccountToUpdate.get());
    }
}
