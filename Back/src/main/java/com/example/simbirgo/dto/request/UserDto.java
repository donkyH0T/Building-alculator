package com.example.simbirgo.dto.request;

import com.example.simbirgo.entity.ERole;
import com.example.simbirgo.entity.User;
import lombok.Data;

@Data
public class UserDto {
    private String login;
    private String email;
    private String password;
    private Boolean isAdmin;


    public static UserDto toDto(User user){
        UserDto userDto=new UserDto();
        userDto.setLogin(user.getLogin());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
       if(user.getRoles().stream().filter(role -> role.getName()==ERole.ROLE_ADMIN).findFirst().orElse(null)!=null){
           userDto.setIsAdmin(true);
       }else{
         userDto.setIsAdmin(false);
       }
       return userDto;
    }
}
