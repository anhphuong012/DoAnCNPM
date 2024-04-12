package com.example.service;

import com.example.dto.UserDto;
import com.example.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    void save(UserDto userDto);
    Boolean checkPasswordUser(String phone,String password);
    Boolean checkUserbyPhone(String phone);

    User getUserbyPhone(String phone);
}
