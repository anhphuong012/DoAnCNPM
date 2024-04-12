package org.example.dacnpm.repositories;

import org.example.dacnpm.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {
//    UserAccount findByPhoneNumberInUserZero(String phoneNumber, String pass);

}
