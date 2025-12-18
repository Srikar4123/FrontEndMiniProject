import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-login.html',
  styleUrls: ['./admin-login.css'],
  standalone: true
})
export class AdminLogin {
  isExistingAdmin = true;
  
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
    this.isExistingAdmin = !this.isExistingAdmin;
    this.clearMessages();
    this.clearFields();
  }

  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }
    
    // TODO: Add actual authentication logic here
    console.log('Admin Login:', this.email, this.password);
    // Navigate to admin dashboard after successful login
    // this.router.navigate(['/admin-dashboard']);
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
    
    if (this.newPassword.length < 8) {
      this.errorMessage = 'Password must be at least 8 characters';
      return;
    }
    
    // TODO: Add actual registration logic here
    console.log('New Admin Registration:', {
      name: this.newName,
      email: this.newEmail,
      password: this.newPassword,
      contactNumber: this.contactNumber
    });
    
    this.successMessage = 'Admin account created successfully! You can now login.';
    setTimeout(() => {
      this.isExistingAdmin = true;
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

