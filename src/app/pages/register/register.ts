import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  standalone: true,
})
export class Register {
  isExistingUser = true;

  // Login fields
  userName = '';
  password = '';

  // Registration fields
  newName = '';
  newEmail = '';
  newPassword = '';
  confirmPassword = '';
  contactNumber = '';

  errorMessage = '';
  successMessage = 'Successfully logged in';

  constructor(private router: Router, private userService: UserService) {}

  toggleMode() {
    this.isExistingUser = !this.isExistingUser;
    this.clearMessages();
    this.clearFields();
  }

  // -------------------------
  // LOGIN (calls backend API)
  // -------------------------

  showSuccess() {
    this.successMessage = 'Login successful!';
    setTimeout(() => {
      this.successMessage = '';
    }, 3000); // hides after 3 seconds
  }
  login() {
    if (!this.userName || !this.password) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    const loginData = {
      userName: this.userName, // backend expects userName
      password: this.password,
    };

    this.userService.login(loginData).subscribe({
      next: (res) => {
        console.log('Login success:', res);
        this.successMessage = 'Login successful';
        // this.router.navigate(['/user-dashboard']);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = err.error || 'Invalid username or password';
      },
    });
  }

  // -------------------------
  // REGISTER (calls backend API)
  // -------------------------
  register() {
    if (
      !this.newName ||
      !this.newEmail ||
      !this.newPassword ||
      !this.confirmPassword ||
      !this.contactNumber
    ) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    const registerData = {
      userName: this.newName,
      phoneNumber: this.contactNumber,
      email: this.newEmail,
      password: this.newPassword,
      confirmPassword: this.confirmPassword,
    };

    this.userService.register(registerData).subscribe({
      next: (res) => {
        console.log('Registered:', res);
        this.successMessage = 'Account created successfully! You can now login.';

        setTimeout(() => {
          this.isExistingUser = true;
          this.clearMessages();
          this.clearFields();
        }, 2000);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = err.error || 'Registration failed';
      },
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  clearMessages() {
    this.errorMessage = '';
    this.successMessage = '';
  }

  clearFields() {
    this.userName = '';
    this.password = '';
    this.newName = '';
    this.newEmail = '';
    this.newPassword = '';
    this.confirmPassword = '';
    this.contactNumber = '';
  }
}
