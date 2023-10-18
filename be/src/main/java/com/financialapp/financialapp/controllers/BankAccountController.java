package com.financialapp.financialapp.controllers;

import com.financialapp.financialapp.entities.BankAccount;
import com.financialapp.financialapp.services.BankAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/bankAccount")
public class BankAccountController {

    private final BankAccountService bankAccountService;

    @Autowired
    public BankAccountController(BankAccountService bankAccountService){
        this.bankAccountService = bankAccountService;
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
}
