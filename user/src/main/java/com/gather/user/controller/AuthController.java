package com.gather.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gather.user.dto.UserLoginDTO;
import com.gather.user.dto.UserLoginResponseDTO;
import com.gather.user.dto.UserRegisterDTO;
import com.gather.user.entity.User;
import com.gather.user.service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
   
  private final AuthService authService;

  @PostMapping("/register")
  public ResponseEntity<User> register(@RequestBody UserRegisterDTO userRegisterDTO){
    return ResponseEntity.ok().body(authService.register(userRegisterDTO));
  }

  @PostMapping("/login")
  public ResponseEntity<UserLoginResponseDTO> login(@RequestBody UserLoginDTO userLoginDTO){
    return ResponseEntity.ok().body(authService.login(userLoginDTO));
  }
}
