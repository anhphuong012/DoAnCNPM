package com.example.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
//import org.springframework.boot.context.properties.ConstructorBinding;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto implements Serializable {
    private String Email;
    private String FullName;
    private int PhoneNumber;
    private Boolean sex;
    private String Password;
    private String CheckPass;

    public UserDto(String email, String fullName, int phoneNumber, Boolean sex, String password) {
        Email = email;
        FullName = fullName;
        PhoneNumber = phoneNumber;
        this.sex = sex;
        Password = password;
    }


}
