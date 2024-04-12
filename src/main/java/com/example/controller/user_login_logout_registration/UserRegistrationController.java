package com.example.controller.user_login_logout_registration;

import com.example.dto.UserDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.service.UserService;

@Controller
@AllArgsConstructor
public class UserRegistrationController {
    private UserService userService;
    @ModelAttribute("userdto")
    public UserDto userResgistrationDto(){
        return new UserDto();
    }
    @GetMapping("/registration")
    public String showRegistrationForm(){
        return "/registration";
    }

    @PostMapping("/registration")
    public String registerUserAccount(@ModelAttribute("userdto") UserDto userDto){
        if(userService.checkUserbyPhone(String.valueOf(userDto.getPhoneNumber()))){
            return "redirect:/registration?phoneexist";
        }
        if(userDto.getPassword().equals(userDto.getCheckPass())==false){
            return "redirect:/registration?checkpass";
        }
        userService.save(userDto);
        return "redirect:/registration?success";
    }
}
