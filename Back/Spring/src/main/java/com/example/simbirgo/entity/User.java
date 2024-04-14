package com.example.simbirgo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(	name = "users")
@Data
@NoArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false)
	private Long id;
	@Column(name = "email",nullable = false)
	private String email;
	@Column(name = "last_name",nullable = false)
	private String last_name;
	@Column(name = "first_name",nullable = false)
	private String first_name;
	@Column(name = "second_name",nullable = false)
	private String second_name;
	@Column(name = "phone",nullable = false)
	private String phone;
	@Column(name = "login",nullable = false)
	private String login;
	@Column(name = "password")
	private String password;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "state_id")
	private User_status state_id = new User_status();

	@OneToMany(fetch = FetchType.LAZY)
	private List<Customers> customers = new ArrayList<>();

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles", 
				joinColumns = @JoinColumn(name = "user_id"),
				inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();

}
