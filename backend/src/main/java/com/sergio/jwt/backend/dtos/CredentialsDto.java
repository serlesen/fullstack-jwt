package com.sergio.jwt.backend.dtos;

public record CredentialsDto (String login, char[] password) { }