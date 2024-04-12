package org.example.dacnpm.controller;

import org.example.dacnpm.model.ReposeOject;
import org.example.dacnpm.model.UserAccount;
import org.example.dacnpm.repositories.UserAccountRepository;
//import org.example.dacnpm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("login")
public class UserController {
    @Autowired
    private UserAccountRepository userRepository;
    @GetMapping("")
    List<UserAccount> findAllUser(){
        return userRepository.findAll();
    }

    @PostMapping("")
    ResponseEntity<ReposeOject> login(@RequestBody UserAccount userAccount){
//        UserAccount user = userRepository.findByPhoneNumberInUserZero(userAccount.getPhoneNumber(), userAccount.getPassword());
        List<UserAccount> userAccountList = userRepository.findAll();
        for(UserAccount account: userAccountList){
            if(account.getPhoneNumber().equals(userAccount.getPhoneNumber())){
                if (userAccount.getPassword().equals(account.getPassword()) && account.getRole() == 0){
                    return ResponseEntity.status(HttpStatus.OK).body( new ReposeOject( "ok", "login account doctor", ""));

                }
                if(userAccount.getPassword().equals(account.getPassword()) && account.getRole() == 1){
                    return ResponseEntity.status(HttpStatus.OK).body( new ReposeOject( "ok", "login account user", ""));

                }

            }

        }

        return ResponseEntity.status(HttpStatus.OK).body( new ReposeOject( "ok", "can not user", ""));

    }
}
