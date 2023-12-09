import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
<nav class="navbar">
  <div class="logo">
    <h4>Logo</h4>
  </div>

  <ul class="nav-links">
    <li><a href="/Report">Report</a></li>
    <li><a href="#">Cart</a></li>
    <li><a href="#">Orders</a></li>
    <li><a href="">Login</a></li>
  </ul>
</nav>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
}
