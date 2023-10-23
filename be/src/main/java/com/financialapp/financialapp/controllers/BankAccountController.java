package com.financialapp.financialapp.controllers;

import com.financialapp.financialapp.dto.TransactionInfoDTO;
import com.financialapp.financialapp.entities.BankAccount;
import com.financialapp.financialapp.services.BankAccountService;
import com.financialapp.financialapp.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/bankAccount")
public class BankAccountController {

    private final BankAccountService bankAccountService;
    private final TransactionService transactionService;
    @Autowired
    public BankAccountController(BankAccountService bankAccountService, TransactionService transactionService){
        this.bankAccountService = bankAccountService;
        this.transactionService = transactionService;
    }

    @PostMapping("/new")
    
    public ResponseEntity<BankAccount> createNewBankAccount(@RequestBody BankAccount bankAccount) {
        BankAccount createdAccount = this.bankAccountService.createNewBankAccount(bankAccount);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdAccount);
    }



    @GetMapping("/all")
    public ResponseEntity<List<BankAccount>> getAllBankAccounts(){
        List<BankAccount> bankAccounts = this.bankAccountService.getAllBankAccounts();

        return ResponseEntity.status(HttpStatus.OK).body(bankAccounts);
    }

    @PutMapping("/update-balance/{id}")
    public ResponseEntity<BankAccount> updateBankAccount(@PathVariable(name = "id") Long bankAccountID, @RequestBody TransactionInfoDTO transactionInfoDTO) throws ParseException {

        BankAccount bankAccountToUpdate = this.bankAccountService.updateBankAccountBalance(bankAccountID, transactionInfoDTO);

        return ResponseEntity.status(HttpStatus.OK).body(bankAccountToUpdate);
    }
    @GetMapping("/getTotalTransactionByMonth/{id}/{month}")
    public ResponseEntity<Integer> getTotalTransactionByMonth(@PathVariable(name = "id") Long bankAccountID,@PathVariable(name = "month") Integer month){


        return ResponseEntity.status(HttpStatus.OK).body(transactionService.getTotalAmountForMonth(bankAccountID,month));

    }


}
