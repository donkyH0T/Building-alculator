package com.example.simbirgo.dto.request;

import com.example.simbirgo.entity.Customers;
import lombok.Data;

import javax.persistence.Column;

@Data
public class CustomersRequest {
    private String last_name;
    private String first_name;
    private String second_name;
    private String phone;
    private String email;
    private String address;

    public Customers toCustomers(){
        Customers customers = new Customers();
        customers.setLast_name(last_name);
        customers.setFirst_name(first_name);
        customers.setSecond_name(second_name);
        customers.setPhone(phone);
        customers.setEmail(email);
        customers.setAddress(address);
        return customers;
    }
}
