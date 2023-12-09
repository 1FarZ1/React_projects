import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
      <div class="loading-spinner">
    <div class="spinner"></div>
  </div>
  `,
  styleUrl: './loading-widget.component.css'
})
export class LoadingWidgetComponent {

}
