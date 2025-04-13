import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Toggle mobile menu
  isMobileMenuOpen = false;

  // Toggle notifications dropdown
  isNotificationsOpen = false;

  // Toggle user dropdown
  isUserMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleNotifications() {
    this.isNotificationsOpen = !this.isNotificationsOpen;
    if (this.isNotificationsOpen) {
      this.isUserMenuOpen = false;
    }
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    if (this.isUserMenuOpen) {
      this.isNotificationsOpen = false;
    }
  }
}
