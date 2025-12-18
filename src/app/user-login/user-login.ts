import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-login.html',
  styleUrls: ['./user-login.css'],
  standalone: true
})
export class UserLogin {
  isExistingUser = true;
  
  // Login fields
  email = '';
  password = '';
  
  // Registration fields
  newName = '';
  newEmail = '';
  newPassword = '';
  confirmPassword = '';
  contactNumber = '';
  
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {}

  toggleMode() {
    this.isExistingUser = !this.isExistingUser;
    this.clearMessages();
    this.clearFields();
  }

  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }
    
    // TODO: Add actual authentication logic here
    console.log('User Login:', this.email, this.password);
    // Navigate to user dashboard after successful login
    // this.router.navigate(['/user-dashboard']);
  }

  register() {
    if (!this.newName || !this.newEmail || !this.newPassword || !this.confirmPassword || !this.contactNumber) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }
    
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }
    
    if (this.newPassword.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters';
      return;
    }
    
    // TODO: Add actual registration logic here
    console.log('New User Registration:', {
      name: this.newName,
      email: this.newEmail,
      password: this.newPassword,
      contactNumber: this.contactNumber
    });
    
    this.successMessage = 'Account created successfully! You can now login.';
    setTimeout(() => {
      this.isExistingUser = true;
      this.clearMessages();
      this.clearFields();
    }, 2000);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  clearMessages() {
    this.errorMessage = '';
    this.successMessage = '';
  }

  clearFields() {
    this.email = '';
    this.password = '';
    this.newName = '';
    this.newEmail = '';
    this.newPassword = '';
    this.confirmPassword = '';
    this.contactNumber = '';
  }
}