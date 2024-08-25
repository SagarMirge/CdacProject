package com.example.gatepass.security;

import org.springframework.security.crypto.password.PasswordEncoder;

public class CustomPasswordEncoder implements PasswordEncoder {

    @Override
    public String encode(CharSequence rawPassword) {
        // Implement your custom encoding logic here
        return rawPassword.toString(); // Example: Just returning the raw password (not secure)
    }

    @Override
    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        // Implement your custom matching logic here
        return rawPassword.toString().equals(encodedPassword); // Example: Just comparing raw passwords
    }
}
