package com.example.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Patient implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "full_name",nullable = false)
    private String FullName;

    @Column(name = "phone_number",nullable = false)
    private String PhoneNumber;

    @Column(name ="age",nullable = false)
    private String Age;

    @Column(name="sex",nullable = false)
    private String Sex;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;

    public Patient(String fullName, String phoneNumber, String age, String sex, User user) {
        FullName = fullName;
        PhoneNumber = phoneNumber;
        Age = age;
        Sex = sex;
        this.user = user;
    }


}
