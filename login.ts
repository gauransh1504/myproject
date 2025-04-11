interface User {
    username: string;
    password: string;
}

const validUsers: User[] = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
];

function validateLogin(username: string, password: string): boolean {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
        return false;
    }
    
    return validUsers.some(user => 
        user.username === trimmedUsername && user.password === trimmedPassword);
}

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const messageDiv = document.getElementById('message');
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    
    if (!loginBtn || !messageDiv || !usernameInput || !passwordInput) {
        console.error("Required DOM elements not found!");
        return;
    }
    
    loginBtn.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        if (!username || !password) {
            messageDiv.textContent = "Please enter both username and password!";
            messageDiv.style.color = "red";
            return;
        }
        
        if (validateLogin(username, password)) {
            messageDiv.textContent = "Login successful!";
            messageDiv.style.color = "green";
            console.log("Login successful!");
            
            usernameInput.value = "";
            passwordInput.value = "";
        } else {
            messageDiv.textContent = "Invalid username or password!";
            messageDiv.style.color = "red";
            console.log("Login failed!");
        }
    });
});
