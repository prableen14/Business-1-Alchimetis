const nameRegex = /^[A-Za-z -]{3,}$/;
const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^.{8,}$/;

export const validateName = (name) => nameRegex.test(name);
export const validateUsername = (username) => usernameRegex.test(username);
export const validateEmail = (email) => emailRegex.test(email);
export const validatePassword = (password) => passwordRegex.test(password);
