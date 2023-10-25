package com.financialapp.financialapp.repositories;

import com.financialapp.financialapp.entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    @Query(value ="SELECT * FROM transaction where idbank_account=:id and MONTH(date) =(:month)",nativeQuery = true)
    Optional<List<Transaction>> getAllByIdAndDate(@Param("month") Integer month, @Param("id") Long id);
}
