package com.example.controller.user_login_logout_registration;

import com.example.dto.UserDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import com.example.service.UserService;

@Controller
@AllArgsConstructor
@SessionAttributes("userdto")
public class UserLoginController {
    private UserService userService;
    @ModelAttribute("userdto")
    public UserDto userDto(){
        return new UserDto();
    }
    @GetMapping("/login")
    public String showLoginForm(){
        return "/login";
    }
    @PostMapping("/login")
    public String Login(@ModelAttribute("userdto") UserDto userDto, Model model){
        if(userService.checkUserbyPhone(String.valueOf(userDto.getPhoneNumber()))==false){
            return "redirect:/login?phonelwrong";
        }
//        User user = userService.getUserbyEmail(userDto.getEmail());
//        if(user.getRole().equals("ADMIN")){
//            return  "redirect:/admin_home";
//        }
        if(userService.checkPasswordUser(userDto.getEmail(),userDto.getPassword())){
            return "redirect:/home?success";
        }

        return "redirect:/login?passwordwrong";
    }
}
