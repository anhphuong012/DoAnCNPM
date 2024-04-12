package com.example.service.Impl;

import com.example.dto.UserDto;
import com.example.entity.User;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.reponsitory.PatientReponsitory;
import com.example.reponsitory.UserReponsitory;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserReponsitory userReponsitory;
    @Autowired
    private PatientReponsitory patientReponsitory;
    @Override
    public void save(UserDto userDto) {
        LocalDateTime Date = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
        String creationDate = Date.format(formatter);
        User user = new User(userDto.getPhoneNumber(),
                userDto.getPassword(),
                creationDate,
                "ROLE_USER"
        );
//        Patient patient =new Patient(
//                "Full Name",
//                "03256",
//                "8",
//                "true",
//
//                user
//        );
        userReponsitory.saveAndFlush(user);
//        patientReponsitory.saveAndFlush(patient) ;
    }

    @Override
    public Boolean checkPasswordUser(String phone, String password) {
        User user = userReponsitory.findUserByPhone(phone);
        if (user != null) {
            // Kiểm tra mật khẩu
            return user.getPassword().equals(password);
        }
        return false;
    }

    @Override
    public Boolean checkUserbyPhone(String phone) {
        User user = userReponsitory.getUserByPhone(phone);
        if(user==null) return false;
        return true;
    }

    @Override
    public User getUserbyPhone(String phone) {
        return userReponsitory.getUserByPhone(phone);
    }
}
